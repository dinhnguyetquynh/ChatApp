import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Otp from '../screens/otpScreens';
import Signup from '../screens/Signup';
import Signin from '../screens/Signin';

import HomeScreen from '../screens/HomeScreen';
import RouterBottom from './RouterBottom';
export type RootStackParamList = {
  Home: undefined;
  Signin: undefined;
  Otp: undefined;
  Signup: {phoneNumber?: string; password?: string};
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Home" component={RouterBottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
