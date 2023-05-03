import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { globalStyles, colors } from '../styles/globalStyles';

const VirtueScreen = ({ route }) => {
  const { title, description } = route.params;
  const [checked, setChecked] = useState(false);

  const handlePress = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>{title}</Text>
      <Text style={globalStyles.subtitle}>{description}</Text>
      <Text style={globalStyles.subtitle}>Reflection Prompt:</Text>
      <Text style={globalStyles.text}>
        Reflect on how you practiced this virtue today and how it affected your
        life.
      </Text>
      <Text style={globalStyles.subtitle}>Daily Tracking:</Text>
      <View style={globalStyles.checkboxContainer}>
        <CheckBox
          title='Practiced today'
          checked={checked}
          onPress={handlePress}
          containerStyle={globalStyles.checkbox}
        />
      </View>
    </ScrollView>
  );
};

VirtueScreen.propTypes = {
  route: PropTypes.object.isRequired,
};

export default VirtueScreen;

/*
TODO:
- Utilize database
- A reflection prompt is provided for users to contemplate the effects of that virtue on their life.
- Implement a function that saves the user's input when the checkbox is toggled.
- The function should be triggered on the onPress event of the CheckBox component.
- The user's input should be submitted to the backend, presumably through an API or query.
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
