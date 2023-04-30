import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles, colors } from '../styles/globalStyles';

const SettingsScreen = ({ navigation }) => {
  const handleSignOut = () => {
    // Sign out the user and navigate back to the WelcomeScreen
  };

  const handleAccountDeletion = () => {
    // Delete the user's account and data, then navigate back to the WelcomeScreen
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
        style={[globalStyles.button, { backgroundColor: colors.softGreen }]}
        onPress={handleResetProgress}
      >
        <Text style={globalStyles.buttonText}>Reset Progress</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: colors.softGreen }]}
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
/* Updated CodeMonkey Comments:

- The SettingsScreen.js file is a work in progress. The functionality for signing out, deleting account, and resetting progress is incomplete.
- The placeholder functions (handleSignOut, handleAccountDeletion, and handleResetProgress) need to be implemented.
- After the functionality is complete, evaluate the UI/UX for improvements and ensure proper handling of user data and navigation.
*/