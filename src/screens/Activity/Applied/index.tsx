import React from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '@components/Text';
import Color from 'themes/Color';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import Card from 'components/Card';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { saveOrRemoveJobs } from 'redux/features/job/jobSlice';
import { JobList } from 'screens/JobSearch/types';
import Fonts from 'themes/Fonts';
import { calculateJobPostPeriod } from 'utils';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';

const { width } = Dimensions.get('window');

const AppliedJobs: React.FC<MaterialTopTabBarProps> = ({ navigation }) => {
  const appliedJobs = useAppSelector(state => state.job.appliedJobs);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.safeAreaView}>
        {appliedJobs.length > 0 ? (
          <FlatList
            contentContainerStyle={styles.flatList}
            style={styles.safeAreaView}
            data={appliedJobs}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              const period = calculateJobPostPeriod(item.createdAt);
              return (
                <Card style={styles.card}>
                  <Text
                    numberOfLines={2}
                    style={[Fonts.style.h4, styles.title]}>
                    {item.jobTitle}
                  </Text>
                  <Text style={[Fonts.style.tiny, styles.companyInfo]}>
                    {item.companyInfo.companyName}
                  </Text>
                  <Text style={[Fonts.style.tiny, styles.time]}>{period}</Text>
                  <Text style={styles.location}>
                    {item.jobLocation.state}
                    {item.jobLocation.area
                      ? `, ${item.jobLocation.area}`
                      : null}
                  </Text>
                </Card>
              );
            }}
          />
        ) : (
          <View style={styles.emptyText}>
            <Text style={Fonts.style.h3}>No Applied Jobs</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default AppliedJobs;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  flatList: {
    padding: 20,
  },
  card: {
    marginBottom: 10,
  },
  time: {
    color: Color.darkgrey,
  },
  companyInfo: {
    marginTop: 5,
  },
  location: {
    marginTop: 10,
    fontSize: 12,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  title: {
    width: width - 80,
  },
  emptyText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
