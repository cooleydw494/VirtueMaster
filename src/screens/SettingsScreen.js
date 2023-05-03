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

/*
TODO:
- Utilize database and/or firebase functionality to improve
- The handleResetProgress function still needs implementation.
- Implement a toggle to switch between light and dark mode.
- Connect the toggle's state to a global state (using Redux or React Context) so the theme colors can be changed throughout the app.
 */
/*
  VirtueMaster PostgreSQL Database Usage Guide
  Purpose: Utility module for PostgreSQL/Firestore interactions.
  Exported from database/connect.js:
- pool, firestore
- getUser(uid)
- createUser(data)
- updateUser(uid, updates)
- getAllVirtues()
- getVirtue(id)
- getUserVirtue(uid, vid)
- updateUserVirtue(uid, vid, updates)
- getDailyVirtueEntry(uid, vid, date)
- createDailyVirtueEntry(data)
- updateDailyVirtueEntry(uid, vid, date, updates)
- getAllMilestoneDefinitions()
- getMilestoneDefinition(mid)
- getMilestone(uid, mid)
- createMilestone(uid, data)
- getUserMilestone(uid, mid)

VirtueMaster PostgreSQL Database Schema:
- users: firebase_uid, email, display_name, provider, profile_picture_url, points, rewards, created_at, updated_at
- virtues: id, name, description, short_description, icon_name, created_at, updated_at
- user_virtues: user_id, virtue_id, current_streak, longest_streak, total_days, total_successes, total_failures
- daily_virtue_entries: user_id, virtue_id, entry_date, status, notes, rating
- milestone_definitions: id, name, description, progress_requirement, icon_name, created_at, updated_at
- milestones: user_id, milestone_definition_id, achieved_date
- user_milestones: user_id, milestone_id, notes, rating
- goals: user_id, title, description, target_date, status
- notifications: user_id, title, message, is_read, created_at, updated_at
- weekly_focus_virtues: user_id, virtue_id, start_date, end_date
- focus_virtue_entries: user_id, focus_virtue_id, entry_date, status, notes, rating
- points_log: user_id, points, description, created_at
- rewards_log: user_id, rewards, description, created_at
*/
