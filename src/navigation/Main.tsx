import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenTab from './Tab/HomeScreenTab';

const Stack = createNativeStackNavigator();

const Main: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreenTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
