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
/* Updated CodeMonkey: Unable to update the file directly. Consider implementing the following code changes:

- Import auth from '@react-native-firebase/auth'

- Change handleSignOut to:

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        navigation.navigate('WelcomeScreen');
      });
  };

- Change handleAccountDeletion to:

  const handleAccountDeletion = () => {
    auth().currentUser
      .delete()
      .then(() => {
        console.log('User account deleted!');
        navigation.navigate('WelcomeScreen');
      })
      .catch((error) => {
        console.log('Error deleting user account:', error);
      });
  };

- The handleResetProgress function still needs implementation.

*/
/* CodeMonkey Comments:

- The SettingsScreen.js file has the placeholder functions for signing out, deleting accounts, and resetting progress.
- The file has appended comments with code changes required to implement the missing functionality.
- After implementing the changes, test the functionality, and evaluate the UI/UX for potential improvements.
- Ensure proper handling of user data and navigation.
*/

/* Updated CodeMonkey: Unable to update the file directly. Consider implementing the following code changes:

- Import auth from '@react-native-firebase/auth'

- Change handleSignOut to:

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        navigation.navigate('WelcomeScreen');
      });
  };

- Change handleAccountDeletion to:

  const handleAccountDeletion = () => {
    auth().currentUser
      .delete()
      .then(() => {
        console.log('User account deleted!');
        navigation.navigate('WelcomeScreen');
      })
      .catch((error) => {
        console.log('Error deleting user account:', error);
      });
  };

- The handleResetProgress function still needs implementation.

*/

// Task 5: Build the Settings Screen for account management
// 1. Design a clean and user-friendly layout for the Settings Screen.
// 2. Implement sections for account details, app preferences, and other relevant options.
// 3. Allow users to change their password, email address, and account information in a secure and safe manner.
// 4. Integrate with the Firebase authentication and database services to update and fetch user information.
// 5. Incorporate user preferences, such as preferred theme, notification settings, privacy settings, and any other required options.
// 6. Include links to relevant legal information such as the privacy policy, terms of service, and any other necessary materials.
// 7. Provide a clear option to log out and/or delete the user account if necessary.
/*
Project Overview:

1. globalStyles.js: Base styles
   - container, titleText, paragraph, input, button, buttonText
   Usage: globalStyles.container, etc.
2. PostgreSQL DB: Tables & Columns
   - users: firebase_uid, email, display_name, provider, profile_picture_url, points, rewards, created_at, updated_at
   - virtues: name, description, short_description, icon_name, created_at, updated_at
   - user_virtues: current_streak, longest_streak, total_days, total_successes, total_failures
   - daily_virtue_entries: entry_date, status, notes, rating
   - milestone_definitions: name, description, progress_requirement, icon_name, created_at, updated_at
   - milestones: achieved_date
   - user_milestones: notes, rating
   - goals: title, description, target_date, status
   - notifications: title, message, is_read, created_at, updated_at
   - weekly_focus_virtues: start_date, end_date
   - focus_virtue_entries: entry_date, status, notes, rating
   - points_log: points, description, created_at
   - rewards_log: rewards, description, created_at
3. connect.js: Connect to DB
   - Import 'pg', 'dotenv', create & export 'Pool' instance
   Usage: Import 'pool' in other modules to query the database
4. Directory Structure:
   - App.js: Main entry point
   - README.md: Documentation
   - assets: Images & SVGs
     - custom-pngs: PNG files
       - logo.png: App logo (PNG)
     - custom-svgs: SVG files & components
       - BackgroundImage.js, Logo.js: SVG components
       - background-image.svg, logo.svg: SVG files
   - src: App components, screens, styles & utilities
     - components: Reusable components
       - Button.js, Card.js, Header.js, ProgressChart.js, ResourceLibrary.js
     - database: DB connection & scripts
       - connect.js, createBaseTables.js, createBaseTables.sql, seedTestData.js, seedTestData.sql
     - screens: App screens
       - CommunityScreen.js, GoalsScreen.js, HomeScreen.js, ProgressScreen.js, SettingsScreen.js, SignInScreen.js, SignUpScreen.js, VirtueScreen.js, WelcomeScreen.js
     - styles: Global styles
       - globalStyles.js
     - utilities: Utility functions
       - FetchWrapper.js
     - utils: Additional utilities
       - NotificationsManager.js, pointsSystem.js
*/
