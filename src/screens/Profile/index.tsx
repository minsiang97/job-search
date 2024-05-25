import React, { useMemo } from 'react';
import {
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
import { user } from 'data/userProfile';
import Fonts from 'themes/Fonts';
import SectionList from '@glyw/react-native-tabbed-section-list/lib/SectionList';
import Card from 'components/Card';
import moment from 'moment';
import { WorkingExperience } from 'screens/Profile/types';
import { ProfileProps } from 'navigation/Stack/ProfileStack/types';

enum TitleSectionList {
  SUMMARY = 'Summary',
  WORKING_EXPERIENCE = 'Working Experience',
  LANGUAGES = 'Languages',
  SKILLS = 'Skills',
  RESUME = 'Resume',
}
interface UserSectionList {
  title: TitleSectionList;
  data: string[] | WorkingExperience[];
}

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
  const userProfile = user;
  const sectionList: UserSectionList[] = useMemo(() => {
    return [
      {
        title: TitleSectionList.SUMMARY,
        data: userProfile.summary ? [userProfile.summary] : [],
      },
      {
        title: TitleSectionList.WORKING_EXPERIENCE,
        data: userProfile.workingExperience,
      },
      { title: TitleSectionList.LANGUAGES, data: userProfile.languages ?? [] },
      {
        title: TitleSectionList.SKILLS,
        data: userProfile.skills ? [userProfile.skills] : [],
      },
      {
        title: TitleSectionList.RESUME,
        data: userProfile.resume ? [userProfile.resume] : [],
      },
    ];
  }, [userProfile]);

  return (
    <>
      <SafeAreaView style={styles.safeAreaView} />
      <StatusBar
        backgroundColor={Color.primaryRed}
        barStyle={Platform.OS === 'android' ? 'light-content' : 'default'}
      />
      <View style={styles.view}>
        <View style={styles.upperContainer}>
          <Text style={[Fonts.style.regularSemiBold, styles.name]}>
            {userProfile.name}
          </Text>
          <Text style={[Fonts.style.small, styles.location]}>
            {userProfile.location}
          </Text>
        </View>
        <View style={styles.sectionList}>
          <SectionList
            sections={sectionList}
            keyExtractor={item => item.title ?? item}
            stickySectionHeadersEnabled={false}
            renderTab={({ title, isActive }) => (
              <View
                style={[
                  styles.tabContainer,
                  isActive && {
                    borderBottomWidth: 1,
                    borderBottomColor: Color.primaryRed,
                  },
                ]}>
                <Text
                  style={[
                    styles.tabText,
                    isActive && { color: Color.primaryRed },
                  ]}>
                  {title}
                </Text>
              </View>
            )}
            renderSectionHeader={({ section }) => (
              <Text style={[Fonts.style.h4, styles.sectionHeaderText]}>
                {section.title}
              </Text>
            )}
            renderItem={({ item, section }) => {
              console.log(section.title);
              if (section.title === 'Summary') {
                return (
                  <View style={styles.itemContainer}>
                    {item ? (
                      <Text>{item}</Text>
                    ) : (
                      <Text>Add your summary now</Text>
                    )}
                  </View>
                );
              } else if (section.title === 'Working Experience') {
                return (
                  <View style={styles.itemContainer}>
                    <Card>
                      <Text>{item.title}</Text>
                      <Text>{item.companyName}</Text>
                      <Text>
                        {moment(item.startDate).format('MMM YYYY')} -{' '}
                        {item.isCurrentEmployment
                          ? 'Present'
                          : moment(item.endDate).format('MMM YYYY')}
                      </Text>
                    </Card>
                  </View>
                );
              } else if (section.title === 'Languages') {
                return (
                  <View style={styles.itemContainer}>
                    <Card>
                      <Text>{item}</Text>
                    </Card>
                  </View>
                );
              } else if (section.title === 'Skills') {
                return (
                  <View style={[styles.flex, styles.itemContainer]}>
                    {item.length > 0 ? (
                      <>
                        {item.map((skill: string) => {
                          return (
                            <View style={styles.skillContainer}>
                              <Text>{skill}</Text>
                            </View>
                          );
                        })}
                      </>
                    ) : null}
                  </View>
                );
              } else if (section.title === 'Resume') {
                const arr = item.split('/');
                const fileName = arr[arr.length - 1];
                return (
                  <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() =>
                      navigation.navigate('PDFViewer', { fileName })
                    }>
                    <Card>
                      <Text numberOfLines={1}>{fileName}</Text>
                    </Card>
                  </TouchableOpacity>
                );
              }
            }}
          />
        </View>
      </View>
    </>
    // </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Color.primaryRed,
  },
  view: {
    flex: 1,
  },
  upperContainer: {
    backgroundColor: Color.primaryRed,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: Color.white,
  },
  location: {
    marginTop: 5,
    color: Color.white,
  },
  sectionList: {
    flex: 1,
    backgroundColor: Color.white,
  },
  tabContainer: {
    borderBottomColor: '#090909',
  },
  tabText: {
    padding: 15,
    color: '#9e9e9e',
  },
  sectionHeaderText: {
    paddingTop: 25,
    paddingBottom: 5,
    paddingHorizontal: 20,
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  skillContainer: {
    borderRadius: 50,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
