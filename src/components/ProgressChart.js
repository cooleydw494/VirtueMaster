import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { BarChart, XAxis } from 'react-native-svg-charts';
import * as scale from 'd3-scale';

const ProgressChart = ({ data }) => {
  const barData = data.map(item => ({
    value: item.value,
    svg: {
      fill: item.color,
    },
  }));

  const labels = data.map(item => item.label);

  return (
    <View style={{ flexDirection: 'column', height: 200, padding: 20 }}>
      <BarChart
        style={{ flex: 1 }}
        data={barData}
        gridMin={0}
        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
        contentInset={{ top: 30, bottom: 30 }}
      />
      <XAxis
        style={{ marginTop: 10 }}
        data=data
        scale={scale.scaleBand}
        formatLabel={(value, index) => labels[index]}
        labelStyle={{ color: 'black' }}
        contentInset={{ left: 25, right: 25 }}
      />
    </View>
  );
};

ProgressChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

ProgressChart.defaultProps = {
  data: [],
};

export default ProgressChart;

/* CodeMonkey Comments:

- ProgressChart.js is a bar chart component for displaying progress data.
- The chart's data, colors, and labels are received through the 'data' prop as an array containing objects with the keys 'value', 'color', and 'label'.
- 'react-native-svg-charts' and 'd3-scale' libraries are used to generate the chart and labels.
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
