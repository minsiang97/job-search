import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Color from '@themes/Color';
import ActivityScreenTabs from 'navigation/Tab/ActivityScreenTopTab';
import { ActivityStackParamList } from 'navigation/Stack/ActivityStack/types';
import JobDetails from 'screens/JobSearch/JobDetails';
import { HeaderTitleAlignType } from 'navigation/Stack/JobSearchStack/types';

const Stack = createNativeStackNavigator<ActivityStackParamList>();
const ActivityStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="ActivityScreenTabs"
      screenOptions={{
        headerBackVisible: false,
        headerStyle: {
          backgroundColor: Color.primaryRed,
        },
        headerTitleStyle: {
          color: Color.white,
        },
        contentStyle: {
          backgroundColor: Color.white,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="ActivityScreenTabs"
        component={ActivityScreenTabs}
        options={{ headerTitle: 'My Activity' }}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetails}
        options={({ route }) => ({
          headerShown: true,
          headerBackVisible: true,
          headerStyle: {
            backgroundColor: Color.primaryRed,
          },
          headerTitleStyle: {
            color: Color.white,
          },
          headerBackTitleVisible: false,
          headerTitle: route.params?.title,
          headerTintColor: Color.white,
          headerTitleAlign: HeaderTitleAlignType.CENTER,
        })}
      />
    </Stack.Navigator>
  );
};

export default ActivityStack;
