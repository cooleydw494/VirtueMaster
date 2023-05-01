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
  globalStyles.js Cheat Sheet:

  1. container: A base style for wrapping components, provides padding.
  2. titleText: A base style for title text, with font size, weight, and color.
  3. paragraph: A base style for paragraph text, with font size and color.
  4. input: A base style for text input, with border and padding.
  5. button: A base style for buttons, with background color, border, and padding.
  6. buttonText: A base style for button text, with font size, weight, and color.

  Usage: Import globalStyles and use the styles by referencing them, e.g., globalStyles.container.
*/
/*
  PostgreSQL Database Cheat Sheet:

  1. users: Stores user data including firebase_uid, email, display_name, provider, profile_picture_url, points, rewards, created_at, and updated_at.
  2. virtues: Stores the 13 virtues with their name, description, short_description, icon_name, created_at, and updated_at.
  3. user_virtues: Stores user-specific virtue data such as current_streak, longest_streak, total_days, total_successes, total_failures.
  4. daily_virtue_entries: Stores user's daily entries for each virtue with entry_date, status, notes, and rating.
  5. milestone_definitions: Stores milestone definitions with name, description, progress_requirement, icon_name, created_at, and updated_at.
  6. milestones: Stores user's achieved milestones with achieved_date.
  7. user_milestones: Stores additional details of user's milestones such as notes and rating.
  8. goals: Stores user's goals with title, description, target_date, and status.
  9. notifications: Stores user's notifications with title, message, is_read, created_at, and updated_at.
  10. weekly_focus_virtues: Stores user's weekly focus virtues with start_date and end_date.
  11. focus_virtue_entries: Stores user's entries for weekly focus virtues with entry_date, status, notes, and rating.
  12. points_log: Stores user's points log with points, description, and created_at.
  13. rewards_log: Stores user's rewards log with rewards, description, and created_at.

  Usage: Use the table and column names as needed when querying the database.
*/
/*
  connect.js Cheat Sheet:

  1. Import 'pg' module to access the PostgreSQL library.
  2. Import 'dotenv' module to load environment variables from the .env file.
  3. Create a new 'Pool' instance with the database connection string and SSL options.
  4. Export the 'pool' instance for use in other modules.

  Usage: Import the 'pool' instance in other modules to query the database.
*/
/*
VirtueMaster Directory Structure:

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