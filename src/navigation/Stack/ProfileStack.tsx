import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Profile from '@screens/Profile';
import Color from '@themes/Color';

const Stack = createNativeStackNavigator();
const ProfileStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          padding: 20,
          backgroundColor: Color.white,
        },
      }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
