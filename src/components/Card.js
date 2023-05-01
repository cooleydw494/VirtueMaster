import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { colors } from '../styles/globalStyles';

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default Card;

/* CodeMonkey Comments:

- Card.js is a reusable card component.
- It accepts children as props, which can be any React element(s) to be displayed within the card.
- This component can be used to create cards with different content throughout the app while maintaining consistent styling.
- It uses propTypes to enforce the required 'children' prop.
*/
/* CodeMonkey Comments:

- Card.js is a reusable card component.
- It accepts children as props, which can be any React element(s) to be displayed within the card.
- This component can be used to create cards with different content throughout the app while maintaining consistent styling.
- It uses propTypes to enforce the required 'children' prop.
*/


/* CodeMonkey Comments:

- Card.js is a reusable card component.
- It accepts children as props, which can be any React element(s) to be displayed within the card.
- This component can be used to create cards with different content throughout the app while maintaining consistent styling.
- It uses propTypes to enforce the required 'children' prop.
*/

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
