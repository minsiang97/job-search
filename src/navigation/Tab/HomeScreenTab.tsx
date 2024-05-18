import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '@components/TabBarIcon';
import Color from '@themes/Color';
import JobSearchStack from '@navigation/Stack/JobSearchStack';
import RecommendedJobStack from '@navigation/Stack/RecommendedJobStack';
import ActivityStack from '@navigation/Stack/ActivityStack';
import ProfileStack from '@navigation/Stack/ProfileStack';

const Tab = createBottomTabNavigator();

const HomeScreenTab: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="JobSearch"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color.primaryRed,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 0,
        },
      }}>
      <Tab.Screen
        name="JobSearchStack"
        component={JobSearchStack}
        options={{
          tabBarIcon: props => (
            <TabBarIcon name="magnifying-glass" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="RecommendedJobStack"
        component={RecommendedJobStack}
        options={{
          tabBarIcon: props => {
            return <TabBarIcon name="thumbs-up" {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="ActivityStack"
        component={ActivityStack}
        options={{
          tabBarIcon: props => {
            return <TabBarIcon name="list" {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: props => {
            return <TabBarIcon name="user" {...props} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreenTab;
