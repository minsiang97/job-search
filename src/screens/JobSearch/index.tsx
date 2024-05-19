import React, { useState } from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '@components/Text';
import Fonts from '@themes/Fonts';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import { recommendedJobList } from '@data/job';
import Color from '@themes/Color';
import moment from 'moment';
import { JobSearchProps } from 'navigation/Stack/JobSearchStack/types';
import Card from 'components/Card';
import { JobList } from 'screens/JobSearch/types';
import { calculateJobPostPeriod } from 'utils';

const JobSearch: React.FC<JobSearchProps> = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState<string>('');

  const handleSearch = () => {
    navigation.navigate('JobSearchResult', { search: searchInput });
  };

  const renderFlatListFooter = () => (
    <Button
      onPress={handleNavigateToRecommend}
      buttonText="See all"
      buttonType="default"
      style={styles.seeAll}
    />
  );

  const handleOnClickJob = (job: JobList) => {
    navigation.navigate('JobDetails', { title: job.jobTitle, id: job.id });
  };

  const renderFlatListHeader = () => (
    <View>
      <Text style={[Fonts.style.h4, styles.recommendTitle]}>
        Recommended for you
      </Text>
    </View>
  );

  const handleNavigateToRecommend = () => {
    navigation.navigate('RecommendedJobs');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.view}>
        <View style={styles.searchContainer}>
          <Text style={Fonts.style.h2}>Hello</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter keywords"
            onChangeText={setSearchInput}
          />
          <Button
            buttonText="Search"
            buttonType={searchInput ? 'primary' : 'disabled'}
            style={styles.button}
            onPress={handleSearch}
            disabled={!searchInput}
          />
        </View>
        <View style={styles.recommendedJobListContainer}>
          <FlatList
            style={styles.flatList}
            contentContainerStyle={styles.flatListContainer}
            data={recommendedJobList.slice(0, 4)}
            ListFooterComponent={
              recommendedJobList.length <= 4 ? null : renderFlatListFooter
            }
            ListHeaderComponent={renderFlatListHeader}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              const period = calculateJobPostPeriod(item.createdAt);
              return (
                <TouchableOpacity
                  key={item.id}
                  style={styles.card}
                  onPress={() => handleOnClickJob(item)}>
                  <Card>
                    <Text numberOfLines={2} style={Fonts.style.h4}>
                      {item.jobTitle}
                    </Text>
                    <Text style={[Fonts.style.tiny, styles.companyInfo]}>
                      {item.companyInfo.companyName}
                    </Text>
                    <Text style={[Fonts.style.tiny, styles.time]}>
                      {period}
                    </Text>
                    <Text style={styles.location}>
                      {item.jobLocation.state}
                      {item.jobLocation.area
                        ? `, ${item.jobLocation.area}`
                        : null}
                    </Text>
                  </Card>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default JobSearch;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
  textInput: {
    marginVertical: 15,
  },
  button: {
    marginVertical: 10,
  },
  searchContainer: {
    padding: 20,
  },
  recommendedJobListContainer: {
    flex: 1,
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
  },
  companyInfo: {
    marginTop: 5,
  },
  location: {
    marginTop: 10,
    fontSize: 12,
  },
  seeAll: {
    marginTop: 10,
  },
  recommendTitle: {
    color: Color.darkgrey,
  },
});
