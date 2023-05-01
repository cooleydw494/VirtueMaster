import React from 'react';\nimport { View, Text, TouchableOpacity } from 'react-native';\nimport { globalStyles } from '../styles/globalStyles';\nimport Svg, { Path } from 'react-native-svg';\nimport BackgroundImage from '../../assets/custom-svgs/BackgroundImage.js';\nimport Logo from '../../assets/custom-svgs/Logo.js';\n\nconst WelcomeScreen = ({ navigation }) => {\n  return (\n    <View style={globalStyles.container}>\n      <View style={globalStyles.overlay}>\n        <BackgroundImage style={globalStyles.background}/>\n        <Logo style={globalStyles.logo} />\n        <Text style={globalStyles.title}>VirtueMaster</Text>\n        <Text style={globalStyles.subtitle}>\n          Unlock your potential through the practice of virtues.\n        </Text>\n        <TouchableOpacity\n          style={globalStyles.primaryButton}\n          onPress={() => navigation.navigate('SignInScreen')}\n        >\n        <Text style={globalStyles.buttonText}>Sign In</Text>\n        </TouchableOpacity>\n        <TouchableOpacity\n          style={globalStyles.secondaryButton}\n          onPress={() => navigation.navigate('SignUpScreen')}\n        >\n          <Text style={globalStyles.buttonText}>Sign Up</Text>\n        </TouchableOpacity>\n      </View>\n    </View>\n  );\n};\n\nexport default WelcomeScreen;

/* CodeMonkey Comments:

- WelcomeScreen.js displays the Welcome screen for the VirtueMaster app.
- The screen has SignIn and SignUp buttons for navigation.
- The custom Logo and BackgroundImage SVG components are imported and used in this screen.
*/\n/* Additional CodeMonkey Comments:\n\n- The WelcomeScreen.js file has implemented Welcome and Sign-In/Sign-Up screens as per the README.md.\n- No major improvements or changes identified at this moment.\n\n*/

// Task 1: Implement Welcome and Authentication Screens
// WelcomeScreen.js
// 1. Ensure a visually appealing and user-friendly design for the Welcome Screen.
// 2. Incorporate brand colors and visuals to create a cohesive look and feel.
// 3. Clearly display the options to sign in or sign up, as well as any guest access or demo features.
// 4. Utilize animations or transitions to enhance the user experience and overall polish of the screen.
// 5. Ensure a direct and seamless transition to SignInScreen and SignUpScreen, as well as any other related screens.

// Task 19: Add a user onboarding tutorial to guide new users
// 1. Create a series of introductory screens or tooltips to guide users through the app's main features and functionality.
// 2. Design the tutorial to be visually appealing and engaging.
// 3. Ensure the tutorial can be easily updated as new features are added.
// 4. Allow users to skip the tutorial if they prefer, but make it easily accessible from the settings or help pages.
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