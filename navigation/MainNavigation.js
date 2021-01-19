import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InOutScreen from '../screens/InOutScreen';
import ChartScreen from '../screens/ChartScreen';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

export const MainNavigation = () => (
  <Tab.Navigator
  initialRouteName="Home"
  >
    <Tab.Screen
      name="Chart"
      component={ChartScreen}
      options={{
        tabBarLabel: 'Thống kê',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="bar-chart-outline" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="InOut"
      component={InOutScreen}
      options={{
        tabBarLabel: 'Chi tiêu',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="add-outline" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Nhà',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home-outline" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Calendar"
      component={CalendarScreen}
      options={{
        tabBarLabel: 'Lịch',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="calendar-outline" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Setting"
      component={SettingScreen}
      options={{
        tabBarLabel: 'Cài đặt',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="construct-outline" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);
