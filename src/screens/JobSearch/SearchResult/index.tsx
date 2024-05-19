import Card from 'components/Card';
import Text from 'components/Text';
import { jobList } from 'data/job';
import moment from 'moment';
import { JobSearchResultProps } from 'navigation/Stack/JobSearchStack/types';
import React, { useMemo, useState } from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import { JobList } from 'screens/JobSearch/types';
import Color from 'themes/Color';
import Fonts from 'themes/Fonts';
import { calculateJobPostPeriod } from 'utils';

const SearchResult: React.FC<JobSearchResultProps> = ({
  route,
  navigation,
}) => {
  const [searchResult, setSearchResult] = useState<JobList[]>(jobList);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { width } = useWindowDimensions();
  const jobResult = useMemo(() => {
    return searchResult.filter(job =>
      job.keywords.some(keyword => {
        return keyword
          .toLowerCase()
          .includes(route.params.search.toLowerCase());
      }),
    );
  }, [searchResult, route.params.search]);

  const renderHeader = () => (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>{jobResult.length} jobs</Text>
    </View>
  );

  const handleOnClickJob = (job: JobList) => {
    navigation.navigate('JobDetails', { title: job.jobTitle, id: job.id });
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      const arr = [...jobList];
      setSearchResult(arr);
      setRefreshing(false);
    }, 2000);
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          {renderHeader()}
          <View style={styles.view}>
            {jobResult && jobResult.length > 0 ? (
              <FlatList
                style={styles.flatList}
                contentContainerStyle={styles.flatListContainer}
                data={jobResult}
                refreshControl={
                  <RefreshControl
                    onRefresh={onRefresh}
                    refreshing={refreshing}
                  />
                }
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

                        <Text style={[Fonts.style.tiny, styles.time]}>
                          {period}
                        </Text>
                      </Card>
                    </TouchableOpacity>
                  );
                }}
              />
            ) : (
              <View style={styles.emptyList}>
                <Text style={styles.emptyListText}>No jobs available</Text>
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  view: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  flatListContainer: {
    padding: 20,
    paddingTop: 10,
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
  seeAll: {
    marginTop: 10,
  },
  recommendTitle: {
    color: Color.darkgrey,
  },
  headerText: {
    marginTop: 5,
  },
  headerView: {
    borderColor: Color.dividerGrey,
    borderWidth: 1,
    backgroundColor: Color.white,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  jobType: {
    marginTop: 10,
  },
  description: {
    color: Color.darkgrey,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    fontSize: 18,
  },
});
