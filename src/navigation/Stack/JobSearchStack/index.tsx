import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import JobSearch from '@screens/JobSearch';
import Color from '@themes/Color';
import SearchResult from 'screens/JobSearch/SearchResult';
import {
  HeaderTitleAlignType,
  JobSearchStackParamList,
} from 'navigation/Stack/JobSearchStack/types';
import JobDetails from 'screens/JobSearch/JobDetails';
import RecommendedJobs from 'screens/JobSearch/Recommended';

const Stack = createNativeStackNavigator<JobSearchStackParamList>();
const JobSearchStack: React.FC = () => {
  const headerOption = (title: string) => {
    return {
      headerShown: true,
      headerStyle: {
        backgroundColor: Color.primaryRed,
      },
      headerTitleStyle: {
        color: Color.white,
      },
      headerBackTitleVisible: false,
      headerTitle: title,
      headerTintColor: Color.white,
      headerTitleAlign: HeaderTitleAlignType.CENTER,
    };
  };

  return (
    <Stack.Navigator
      initialRouteName="JobSearch"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Color.white,
        },
      }}>
      <Stack.Screen name="JobSearch" component={JobSearch} />
      <Stack.Screen
        name="JobSearchResult"
        component={SearchResult}
        options={({ route }) => headerOption(route.params.search)}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetails}
        options={({ route }) => headerOption(route.params.title)}
      />
      <Stack.Screen
        name="RecommendedJobs"
        component={RecommendedJobs}
        options={() => headerOption('Recommended Jobs')}
      />
    </Stack.Navigator>
  );
};

export default JobSearchStack;
