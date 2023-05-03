import React from 'react';
import { View, Text } from 'react-native';
import ProgressChart from '../components/ProgressChart';
import { globalStyles, colors } from '../styles/globalStyles';

const ProgressScreen = () => {
  // Dummy data for demonstration purposes
  const progressData = [
    { virtue: 'Humility', progress: 0.7 },
    { virtue: 'Patience', progress: 0.5 },
    { virtue: 'Charity', progress: 0.6 },
    { virtue: 'Kindness', progress: 0.8 },
    { virtue: 'Temperance', progress: 0.4 },
    { virtue: 'Diligence', progress: 0.3 },
    { virtue: 'Chastity', progress: 0.9 },
  ];

  // Dummy data for points and rewards
  const userPoints = 123;
  const userRewards = 5;

  return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Progress</Text>
        <Text style={globalStyles.subtitle}>Points: {userPoints}</Text>
        <Text style={globalStyles.subtitle}>Rewards: {userRewards}</Text>
        <Text style={globalStyles.subtitle}>Your Virtue Progress:</Text>
        {progressData.map((virtueData, index) => (
            <ProgressChart key={index} virtueData={virtueData} style={[globalStyles.progressChart, {backgroundColor: colors.primary}]} />
        ))}
      </View>
  );
};

export default ProgressScreen;
/*
TODO:
- Update or replace the dummy data with real user data fetched from the database
- display the progress of virtues for the user in a visually appealing and easy-to-understand way.
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
