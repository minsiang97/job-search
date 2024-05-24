import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Profile from '@screens/Profile';
import Color from '@themes/Color';
import PDFViewer from 'screens/Profile/PDFViewer';
import { ProfileStackParamList } from 'navigation/Stack/ProfileStack/types';

const Stack = createNativeStackNavigator<ProfileStackParamList>();
const ProfileStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Color.white,
        },
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="PDFViewer"
        component={PDFViewer}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: route.params.fileName,
          headerTitleAlign: 'center',
          headerTintColor: Color.white,
          headerTitleStyle: {
            color: Color.white,
          },
          headerStyle: {
            backgroundColor: Color.primaryRed,
          },
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
