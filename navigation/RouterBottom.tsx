import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/chatScreen';
import ListFriends from '../screens/ListFriends';
import ProfileScreen from '../screens/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
const tabs = [
  {
    name: 'Home',
    component: ChatScreen,
    icon: <MaterialCommunityIcons name="home-battery" size={24} />,
  },
];
const RouterBottom: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="ChatScreen">
        {tabs.map(tab => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarLabel: tab.name,
              tabBarIcon: () => tab.icon,
              headerShown: false,
            }}
          />
        ))}
        <Tab.Screen
          name="ListFriends"
          component={ListFriends}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default RouterBottom;
