import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Recommended from '@screens/Recommended';
import Color from '@themes/Color';

const Stack = createNativeStackNavigator();
const RecommendedJobStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Recommended"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          padding: 20,
          backgroundColor: Color.white,
        },
      }}>
      <Stack.Screen name="Recommended" component={Recommended} />
    </Stack.Navigator>
  );
};

export default RecommendedJobStack;
