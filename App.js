import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from 'firebase/app';
import React, { useEffect } from 'react';
import { registerForPushNotificationsAsync } from './src/utils/NotificationsManager';

import WelcomeScreen from './src/screens/WelcomeScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import VirtueScreen from './src/screens/VirtueScreen';
import TabNavigator from './src/components/TabNavigator';
import firebaseConfig from './firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);

const Stack = createStackNavigator();

const App = () => {
    useEffect(() => {
        registerForPushNotificationsAsync()
            .then(token => console.log(token))
            .catch(err => console.error(err));
    }, []);

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
export { firebaseApp };
