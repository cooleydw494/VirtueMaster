import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { initializeApp } from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WelcomeScreen from './src/screens/WelcomeScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import VirtueScreen from './src/screens/VirtueScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import GoalsScreen from './src/screens/GoalsScreen';

const firebaseConfig = {
  apiKey: process.env['FIREBASE_API_KEY'],
  authDomain: process.env['FIREBASE_AUTH_DOMAIN'],
  projectId: process.env['FIREBASE_PROJECT_ID'],
  storageBucket: process.env['FIREBASE_STORAGE_BUCKET'],
  messagingSenderId: process.env['FIREBASE_MESSAGING_SENDER_ID'],
  appId: process.env['FIREBASE_APP_ID'],
  measurementId: process.env['FIREBASE_MEASUREMENT_ID']
};

initializeApp(firebaseConfig);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  // Enhancement 1: Improve the overall user experience by adding custom icons and styling to the bottom tab navigator.
  // Enhancement 2: Implement push notifications to notify users about progress updates or goal completion.
  // Enhancement 3: Add data caching and offline support so that users can access the app without a constant internet connection.

  const TabNavigator = () => (
    <Tab.Navigator>
      <Tab.Screen name='HomeScreen' component={HomeScreen} />
      <Tab.Screen name='ProgressScreen' component={ProgressScreen} />
      <Tab.Screen name='SettingsScreen' component={SettingsScreen} />
      <Tab.Screen name='GoalsScreen' component={GoalsScreen} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
        <Stack.Screen name='SignInScreen' component={SignInScreen} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        <Stack.Screen name='VirtueScreen' component={VirtueScreen} />
        <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

/* CodeMonkey Comments:

- App.js is the entry point of the VirtueMaster application.
- It initializes Firebase, sets up navigation, and renders the main screen.
- The app uses react-navigation for handling screen transitions and navigation.
- The TabNavigator and StackNavigator components are used to structure the app.

Suggestions:

1. Improve the overall user experience by adding custom icons and styling to the bottom tab navigator.
2. Implement push notifications to notify users about progress updates or goal completion.
3. Add data caching and offline support so that users can access the app without a constant internet connection.
*/
