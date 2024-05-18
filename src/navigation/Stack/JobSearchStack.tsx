import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import JobSearch from '@screens/JobSearch';
import Color from '@themes/Color';

const Stack = createNativeStackNavigator();
const JobSearchStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="JobSearch"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          padding: 20,
          backgroundColor: Color.white,
        },
      }}>
      <Stack.Screen name="JobSearch" component={JobSearch} />
    </Stack.Navigator>
  );
};

export default JobSearchStack;
