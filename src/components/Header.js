import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  }
});

export default Header;

/*
TODO:
- Utilize database and/or firebase functionality to improve
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
