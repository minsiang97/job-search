import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Activity from '@screens/Activity';
import Color from '@themes/Color';

const Stack = createNativeStackNavigator();
const ActivityStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Activity"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          padding: 20,
          backgroundColor: Color.white,
        },
      }}>
      <Stack.Screen name="Activity" component={Activity} />
    </Stack.Navigator>
  );
};

export default ActivityStack;
