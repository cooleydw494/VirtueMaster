import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles, colors } from '../styles/globalStyles';
import {getAuth} from "firebase/auth";

const SettingsScreen = ({ navigation }) => {

    const auth = getAuth();

    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                console.log('User signed out!');
                navigation.navigate('WelcomeScreen');
            });
    };

    const handleAccountDeletion = () => {
        auth.currentUser
            .delete()
            .then(() => {
                console.log('User account deleted!');
                navigation.navigate('WelcomeScreen');
            })
            .catch((error) => {
                console.log('Error deleting user account:', error);
            });
    };

    const handleResetProgress = () => {
        // Reset the user's progress data
    };


  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Settings</Text>

      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: colors.secondary }]}
        onPress={handleSignOut}
      >
        <Text style={globalStyles.buttonText}>Sign Out</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: colors.secondary }]}
        onPress={handleResetProgress}
      >
        <Text style={globalStyles.buttonText}>Reset Progress</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: colors.secondary }]}
        onPress={handleAccountDeletion}
      >
        <Text style={globalStyles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
};

SettingsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SettingsScreen;
