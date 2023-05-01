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