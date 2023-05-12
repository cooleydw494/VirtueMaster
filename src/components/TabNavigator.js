import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import HomeScreen from '../../src/screens/HomeScreen';
import ProgressScreen from '../../src/screens/ProgressScreen';
import SettingsScreen from '../../src/screens/SettingsScreen';
import GoalsScreen from '../../src/screens/GoalsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'HomeScreen') {
                iconName = Platform.OS === 'ios' ? 'ios-home' : 'md-home';
            } else if (route.name === 'ProgressScreen') {
                iconName = Platform.OS === 'ios' ? 'ios-analytics' : 'md-analytics';
            } else if (route.name === 'SettingsScreen') {
                iconName = Platform.OS === 'ios' ? 'ios-settings' : 'md-settings';
            } else if (route.name === 'GoalsScreen') {
                iconName = Platform.OS === 'ios' ? 'ios-ribbon' : 'md-ribbon';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
        },
    })}
                   tabBarOptions={{
                       activeTintColor: '#457B9D',
                       inactiveTintColor: 'gray',
                   }}
    >
        <Tab.Screen name='HomeScreen' component={HomeScreen} />
        <Tab.Screen name='ProgressScreen' component={ProgressScreen} />
        <Tab.Screen name='SettingsScreen' component={SettingsScreen} />
        <Tab.Screen name='GoalsScreen' component={GoalsScreen} />
    </Tab.Navigator>
);

export default TabNavigator;
