import Divider from 'components/Divider';
import Text from 'components/Text';
import { jobList } from 'data/job';
import { JobDetailsProps } from 'navigation/Stack/JobSearchStack/types';
import React, { useMemo, useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import Color from 'themes/Color';
import Fonts from 'themes/Fonts';
import { calculateJobPostPeriod, parseCurrencyAmount } from 'utils';
import Icon from 'react-native-vector-icons/FontAwesome6';
import RenderHTML from 'react-native-render-html';
import Button from 'components/Button';
import { ActivityJobDetailsProps } from 'navigation/Stack/ActivityStack/types';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { saveAppliedJobs } from 'redux/features/job/jobSlice';

const JobDetails: React.FC<JobDetailsProps | ActivityJobDetailsProps> = ({
  route,
  navigation,
}) => {
  const [loading, setLoading] = useState(false);
  const { width } = useWindowDimensions();
  const dispatch = useAppDispatch();
  const jobDetails = useMemo(() => {
    return jobList.find(job => job.id === route.params.id);
  }, [jobList, route.params.id]);

  const appliedJobs = useAppSelector(state => state.job.appliedJobs);

  const handleApply = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(saveAppliedJobs(jobDetails));
      setLoading(false);
      Alert.alert(
        'Job Application',
        `Successfully Applied for ${jobDetails?.jobTitle}`,
        [{ text: 'OK', onPress: () => navigation.goBack() }],
      );
    }, 2000);
  };
  return (
    <SafeAreaView style={styles.container}>
      {jobDetails ? (
        <>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.view}>
            <Text style={Fonts.style.h3}>{jobDetails?.jobTitle}</Text>
            <Text style={[Fonts.style.semiBold, styles.companyName]}>
              {jobDetails?.companyInfo.companyName}
            </Text>
            <Text style={[Fonts.style.tiny, styles.time]}>
              {calculateJobPostPeriod(jobDetails?.createdAt)}
            </Text>
            <Divider />
            <View style={[styles.flex, { marginTop: 0 }]}>
              <View style={styles.icon}>
                <Icon name="location-dot" size={15} color={Color.darkgrey} />
              </View>
              <Text style={styles.text}>
                {jobDetails.jobLocation.state}
                {jobDetails.jobLocation.area
                  ? `, ${jobDetails.jobLocation.area}`
                  : null}
              </Text>
            </View>
            <View style={styles.flex}>
              <View style={styles.icon}>
                <Icon name="building" size={15} color={Color.darkgrey} />
              </View>
              <Text style={styles.text}>{jobDetails.category}</Text>
            </View>
            <View style={styles.flex}>
              <View style={styles.icon}>
                <Icon name="clock" size={15} color={Color.darkgrey} />
              </View>
              <Text style={styles.text}>{jobDetails.jobType}</Text>
            </View>
            {jobDetails.minimumSalary && jobDetails.maximumSalary ? (
              <View style={styles.flex}>
                <View style={styles.icon}>
                  <Icon name="money-bill" size={15} color={Color.darkgrey} />
                </View>
                <Text style={styles.text}>
                  {parseCurrencyAmount(jobDetails.minimumSalary)} -{' '}
                  {parseCurrencyAmount(jobDetails.maximumSalary)} per month
                </Text>
              </View>
            ) : null}
            <Divider />
            <Text style={Fonts.style.medium}>
              {jobDetails.description.mainDescription}
            </Text>
            <View style={styles.description}>
              <RenderHTML
                source={{ html: jobDetails.description.jobDescription }}
                contentWidth={width}
              />
            </View>
            <View style={styles.companyInfo}>
              <Text style={Fonts.style.regularSemiBold}>
                Company information
              </Text>
              <Text
                style={[
                  Fonts.style.regularSemiBold,
                  styles.registrationNumber,
                ]}>
                Registration No.
              </Text>
              <Text>{jobDetails.companyInfo.registrationNo}</Text>
            </View>
            <Divider />
            <View>
              <Text style={Fonts.style.regularSemiBold}>Be careful</Text>
              <Text style={styles.companyInfo}>
                Don't provide your bank or credit card details when applying for
                jobs
              </Text>
            </View>
          </ScrollView>
          <View style={styles.buttonView}>
            <Button
              buttonText={
                appliedJobs.some(job => job.id === jobDetails.id)
                  ? 'Applied'
                  : 'Apply'
              }
              buttonType={
                appliedJobs.some(job => job.id === jobDetails.id)
                  ? 'disabled'
                  : 'primary'
              }
              onPress={handleApply}
              loading={loading}
            />
          </View>
        </>
      ) : null}
    </SafeAreaView>
  );
};

export default JobDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    padding: 20,
  },
  companyName: {
    marginTop: 10,
  },
  time: {
    color: Color.darkgrey,
    marginTop: 3,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    flex: 1,
    marginLeft: 10,
  },
  icon: {
    width: 20,
    alignItems: 'center',
  },
  description: {
    marginTop: 10,
  },
  companyInfo: {
    marginTop: 10,
  },
  registrationNumber: {
    marginTop: 10,
  },
  buttonView: {
    padding: 20,
    backgroundColor: Color.white,
  },
});
