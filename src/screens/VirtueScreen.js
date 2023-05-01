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

/* CodeMonkey Comments:

- VirtueScreen.js is the screen for each virtue in the VirtueMaster app.
- It receives the title and description of a virtue as props.
- Users can toggle a checkbox to indicate whether they practiced the virtue for the day.
- A reflection prompt is provided for users to contemplate the effects of that virtue on their life.
*/
/* CodeMonkey Comments:

- VirtueScreen.js is the screen for each virtue in the VirtueMaster app.
- It receives the title and description of a virtue as props.
- Users can toggle a checkbox to indicate whether they practiced the virtue for the day.
- A reflection prompt is provided for users to contemplate the effects of that virtue on their life.
*/

/* Proposed CodeMonkey Changes:

- Implement a function that saves the user's input when the checkbox is toggled.
- The function should be triggered on the onPress event of the CheckBox component.
- The user's input should be submitted to the backend, presumably through an API or query.

Please note that due to limited information about the backend, a precise implementation cannot be provided at this moment. Adjust this code based on the backend's design.
*/

// Task 3: Develop the Virtue Screen with detailed information and daily tracking
// 1. Design the layout of the Virtue Screen, showcasing detailed information about the selected virtue in an intuitive manner.
// 2. Implement a daily tracking feature allowing users to rate their performance on the selected virtue.
// 3. Display historical tracking data in a visually appealing format, such as charts, graphs, or calendars.
// 4. Offer additional resources, tips, or challenges related to the specific virtue in order to keep users engaged.
// 5. Integrate with the Firebase database to store and retrieve user tracking data and other virtue resources.
// 6. Optimize the user interface for better readability and navigation experience.
// 7. Test and refine the Virtue Screen for effective user engagement.
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
