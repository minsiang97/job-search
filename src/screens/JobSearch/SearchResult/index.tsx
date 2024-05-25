import Card from 'components/Card';
import Text from 'components/Text';
import { jobList } from 'data/job';
import moment from 'moment';
import { JobSearchResultProps } from 'navigation/Stack/JobSearchStack/types';
import React, { useMemo, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import { JobList, JobState, JobType } from 'screens/JobSearch/types';
import Color from 'themes/Color';
import Fonts from 'themes/Fonts';
import { calculateJobPostPeriod } from 'utils';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { saveOrRemoveJobs } from 'redux/features/job/jobSlice';
import SpringBottomSheet from 'components/BottomSheet';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import Divider from 'components/Divider';
import Button from 'components/Button';

const { width, height } = Dimensions.get('window');

const SearchResult: React.FC<JobSearchResultProps> = ({
  route,
  navigation,
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const locationBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [searchResult, setSearchResult] = useState<JobList[]>(jobList);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [confirmedLocation, setConfirmedLocation] = useState<string | null>(
    null,
  );
  const [confirmedJobTypes, setConfirmedJobTypes] = useState<string[]>([]);
  const { width } = useWindowDimensions();
  const dispatch = useAppDispatch();
  const savedJobs = useAppSelector(state => state.job.savedJobs);
  const appliedJobs = useAppSelector(state => state.job.appliedJobs);
  const jobResult = useMemo(() => {
    if (confirmedJobTypes.length > 0 && confirmedLocation) {
      return searchResult.filter(
        job =>
          job.keywords.some((keyword: string) => {
            return keyword
              .toLowerCase()
              .includes(route.params.search.toLowerCase());
          }) &&
          job.jobLocation.state === confirmedLocation &&
          confirmedJobTypes.includes(job.jobType),
      );
    }

    if (confirmedJobTypes.length > 0) {
      return searchResult.filter(
        job =>
          job.keywords.some((keyword: string) => {
            return keyword
              .toLowerCase()
              .includes(route.params.search.toLowerCase());
          }) && confirmedJobTypes.includes(job.jobType),
      );
    }

    if (confirmedLocation) {
      return searchResult.filter(
        job =>
          job.keywords.some((keyword: string) => {
            return keyword
              .toLowerCase()
              .includes(route.params.search.toLowerCase());
          }) && job.jobLocation.state === confirmedLocation,
      );
    }
    return searchResult.filter(job =>
      job.keywords.some((keyword: string) => {
        return keyword
          .toLowerCase()
          .includes(route.params.search.toLowerCase());
      }),
    );
  }, [searchResult, route.params.search, confirmedJobTypes, confirmedLocation]);

  const locationList: JobState[] = Object.values(JobState);
  const jobTypeList: JobType[] = Object.values(JobType);

  const renderHeader = () => (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>{jobResult.length} jobs</Text>
      <TouchableOpacity onPress={() => bottomSheetModalRef?.current?.present()}>
        <Icon name="filter" color={Color.primaryRed} size={15} />
      </TouchableOpacity>
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

  const handleSaveJob = (job: JobList) => {
    dispatch(saveOrRemoveJobs(job));
  };

  const handleOnClickLocation = (location: JobState) => {
    setSelectedLocation(location);
    closeLocationBottomSheet();
  };

  const handleOnClickJobType = (jobType: JobType) => {
    if (selectedJobTypes && selectedJobTypes.some(job => job === jobType)) {
      const filteredArr = selectedJobTypes.filter(job => job !== jobType);
      setSelectedJobTypes(filteredArr);
    } else {
      setSelectedJobTypes([...selectedJobTypes, jobType]);
    }
  };

  const renderSeparator = () => <Divider />;
  const closeLocationBottomSheet = () => {
    locationBottomSheetModalRef.current?.dismiss();
  };
  const renderLocationBottomSheet = () => {
    return (
      <SpringBottomSheet
        snapPoints={[height * 0.7, height * 0.7]}
        ref={locationBottomSheetModalRef}
        enablePanDownToClose={false}>
        <BottomSheetView style={[styles.bottomSheetView, { paddingTop: 40 }]}>
          <FlatList
            data={locationList}
            keyExtractor={item => item}
            ItemSeparatorComponent={renderSeparator}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.locationItem}
                  onPress={() => handleOnClickLocation(item)}>
                  <Text>{item}</Text>
                  {selectedLocation === item ? (
                    <Icon name="check" size={16} />
                  ) : null}
                </TouchableOpacity>
              );
            }}
          />
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={closeLocationBottomSheet}>
            <Icon name="xmark" size={16} />
          </TouchableOpacity>
        </BottomSheetView>
      </SpringBottomSheet>
    );
  };

  const renderBottomSheet = () => {
    return (
      <BottomSheetView style={styles.bottomSheetView}>
        <Text>Filter</Text>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => locationBottomSheetModalRef.current?.present()}>
            <Text style={selectedLocation ? null : styles.dropdownText}>
              {selectedLocation ?? 'Select location'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>Job Types</Text>
          <FlatList
            data={jobTypeList}
            contentContainerStyle={styles.flexwrap}
            keyExtractor={item => item}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.pill,
                    selectedJobTypes.some(job => job === item) &&
                      styles.selectedPill,
                  ]}
                  onPress={() => handleOnClickJobType(item)}>
                  <Text
                    style={
                      selectedJobTypes.some(job => job === item) &&
                      styles.selectedPillText
                    }>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
            horizontal
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            buttonText="Apply Filter"
            buttonType="primary"
            onPress={handleApplyFilter}
          />
          <Button
            buttonText="Reset"
            buttonType="transparent"
            textStyle={{ fontWeight: '400' }}
            onPress={handleResetFilter}
          />
        </View>
        {renderLocationBottomSheet()}
      </BottomSheetView>
    );
  };

  const handleApplyFilter = () => {
    setConfirmedJobTypes(selectedJobTypes);
    setConfirmedLocation(selectedLocation);
    bottomSheetModalRef.current?.close();
  };

  const handleResetFilter = () => {
    setSelectedLocation(null);
    setConfirmedLocation(null);
    setSelectedJobTypes([]);
    setConfirmedJobTypes([]);
    bottomSheetModalRef.current?.close();
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar
          backgroundColor={Color.primaryRed}
          barStyle={Platform.OS === 'android' ? 'light-content' : 'default'}
        />
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

                        <Text style={[Fonts.style.tiny, styles.time]}>
                          {period}
                        </Text>
                        {appliedJobs.some(job => job.id === item.id) ? (
                          <View style={styles.icon}>
                            <Icon
                              name="circle-check"
                              size={18}
                              color={Color.green}
                            />
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
            ) : (
              <View style={styles.emptyList}>
                <Text style={styles.emptyListText}>No jobs available</Text>
              </View>
            )}
          </View>
        </View>
        <SpringBottomSheet
          enableDynamicSizing
          ref={bottomSheetModalRef}
          enablePanDownToClose={false}>
          {renderBottomSheet}
        </SpringBottomSheet>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  icon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  title: {
    width: width - 80,
  },
  bottomSheetView: {
    padding: 20,
    paddingBottom: 30,
  },
  dropdown: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: Color.dividerGrey,
  },
  dropdownText: {
    color: Color.grey,
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 20,
  },
  locationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexwrap: {
    flexWrap: 'wrap',
    marginTop: 10,
  },
  pill: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Color.dividerGrey,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  selectedPill: {
    backgroundColor: Color.primaryRed,
    borderColor: Color.primaryRed,
  },
  selectedPillText: {
    color: Color.white,
  },
  buttonContainer: {
    marginTop: 40,
  },
});
