import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppliedJobs from 'screens/Activity/Applied';
import SavedJobs from 'screens/Activity/Saved';
import Color from 'themes/Color';

const Tab = createMaterialTopTabNavigator();

const ActivityScreenTabs: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="SavedJobs"
      screenOptions={{
        tabBarActiveTintColor: Color.primaryRed,
        tabBarIndicatorStyle: { backgroundColor: Color.primaryRed },
      }}>
      <Tab.Screen
        name="SavedJobs"
        component={SavedJobs}
        options={{ tabBarLabel: 'Saved' }}
      />
      <Tab.Screen
        name="AppliedJobs"
        component={AppliedJobs}
        options={{ tabBarLabel: 'Applied' }}
      />
    </Tab.Navigator>
  );
};

export default ActivityScreenTabs;
