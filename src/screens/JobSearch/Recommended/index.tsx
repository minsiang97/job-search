import Card from 'components/Card';
import Text from 'components/Text';
import { recommendedJobList } from 'data/job';
import { RecommendedJobsProps } from 'navigation/Stack/JobSearchStack/types';
import React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { JobList } from 'screens/JobSearch/types';
import Color from 'themes/Color';
import Fonts from 'themes/Fonts';
import { calculateJobPostPeriod } from 'utils';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { saveOrRemoveJobs } from 'redux/features/job/jobSlice';

const { width } = Dimensions.get('window');

const RecommendedJobs: React.FC<RecommendedJobsProps> = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const dispatch = useAppDispatch();
  const savedJobs = useAppSelector(state => state.job.savedJobs);
  const appliedJobs = useAppSelector(state => state.job.appliedJobs);
  const handleOnClickJob = (job: JobList) => {
    navigation.navigate('JobDetails', { title: job.jobTitle, id: job.id });
  };

  const handleSaveJob = (job: JobList) => {
    dispatch(saveOrRemoveJobs(job));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.flatListContainer}
          data={recommendedJobList}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => {
            const period = calculateJobPostPeriod(item.createdAt);
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() => handleOnClickJob(item)}>
                <Card>
                  <Text
                    numberOfLines={2}
                    style={[Fonts.style.h4, styles.title]}>
                    {item.jobTitle}
                  </Text>
                  <Text style={[Fonts.style.medium, styles.companyInfo]}>
                    {item.companyInfo.companyName}
                  </Text>
                  <Text style={[styles.jobType]}>{item.jobType}</Text>
                  <Text style={styles.location}>
                    {item.jobLocation.state}
                    {item.jobLocation.area
                      ? `, ${item.jobLocation.area}`
                      : null}
                  </Text>
                  {item.description.bulletDescription ? (
                    <RenderHTML
                      source={{
                        html: item.description.bulletDescription,
                      }}
                      contentWidth={width}
                    />
                  ) : null}
                  <Text numberOfLines={4} style={styles.description}>
                    {item.description.mainDescription}
                  </Text>

                  <Text style={[Fonts.style.tiny, styles.time]}>{period}</Text>
                  {appliedJobs.some(job => job.id === item.id) ? (
                    <View style={styles.icon}>
                      <Icon name="circle-check" size={18} color={Color.green} />
                    </View>
                  ) : (
                    <TouchableOpacity
                      style={styles.icon}
                      onPress={() => handleSaveJob(item)}>
                      <Icon
                        name="bookmark"
                        size={18}
                        color={Color.primaryRed}
                        solid={savedJobs.some(job => job.id === item.id)}
                      />
                    </TouchableOpacity>
                  )}
                </Card>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default RecommendedJobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    padding: 20,
  },
  flatList: {
    flex: 1,
  },
  flatListContainer: {
    padding: 20,
  },
  card: {
    marginTop: 10,
  },
  time: {
    color: Color.darkgrey,
    marginTop: 10,
  },
  companyInfo: {
    marginTop: 5,
    color: Color.darkgrey,
  },
  location: {
    marginTop: 5,
    fontSize: 12,
  },
  jobType: {
    marginTop: 10,
  },
  description: {
    color: Color.darkgrey,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  title: {
    width: width - 80,
  },
});
