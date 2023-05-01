import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { globalStyles, colors } from '../styles/globalStyles';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    if (!email || !password || !confirmPassword) {
      setErrorMessage('All fields are required');
      return false;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return false;
    }
    return true;
  };

  const signUp = () => {
    if (validateForm()) {
      setLoading(true);
      setErrorMessage('');
      // Firebase authentication logic goes here
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Sign Up</Text>
      {errorMessage ? <Text style={globalStyles.errorText}>{errorMessage}</Text> : null}
      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCompleteType="email"
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        autoCompleteType="password"
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Confirm Password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry
        autoCompleteType="password"
      />
      <TouchableOpacity style={globalStyles.primaryButton} onPress={signUp}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          <Text style={globalStyles.buttonText}>Sign Up</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignInScreen')}
      >
        <Text style={globalStyles.linkText}>
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

/* CodeMonkey Comments:

- SignUpScreen.js is the sign up screen for the VirtueMaster app.
- It contains input fields for an email, password, and confirm password, with form validation.
- signUp function includes a placeholder comment where Firebase authentication logic should be implemented.
*/  const signUp = async () => {
    setLoading(true);
    setErrorMessage('');
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Successfully signed up!');
      setLoading(false);
    } catch (error) {
      Alert.alert('Error:', error.message);
      setLoading(false);
    }
  };

/* Updated CodeMonkey Comments:

- SignUpScreen.js now includes Firebase authentication logic for sign up.
- The createUserWithEmailAndPassword method is used to create a new user account with the provided email and password.
- Alerts have been added to display success messages and errors to the user.
*/

// Task 1: Implement Welcome and Authentication Screens
// SignUpScreen.js
// 1. Ensure a visually appealing and user-friendly design for the SignUp Screen.
// 2. Incorporate clear fields for users to input their email address, password, and any other required information.
// 3. Implement error handling and input validation for user inputs, including password complexity requirements.
// 4. Integrate with the authentication service to securely create user accounts and manage sessions.
// 5. Provide intuitive navigation to other screens, such as SignInScreen, Privacy Policy, or back to WelcomeScreen.
// 6. Utilize animations or transitions to enhance the user experience and overall polish of the screen.

// Task 18: Implement error handling and input validation for user inputs
// 1. Validate email format and display an error message on incorrect input.
// 2. Validate password length and display an error message if it does not meet minimum requirements.
// 3. Ensure that an error message is displayed if the user registration fails, such as email already in use.
// 4. Add any necessary try-catch blocks to handle errors in the registration process.

// Task 11: Improve user interface and overall user experience
// 1. Revisit the design and layout to ensure it is visually appealing and user-friendly.
// 2. Add more user feedback, such as loading indicators and tooltips.
// 3. Test the screen on various devices and orientations to ensure responsiveness and consistency in the layout.

// Task 18: Implement error handling and input validation for user inputs
// To enhance the user experience and avoid bugs, follow these best practices:
// 1. Validate all user input on the client-side and server-side. Inputs should match the required pattern and criteria.
// 2. Handle errors gracefully by displaying appropriate error messages to users.
// 3. Ensure that user feedback is accurate and precise, stating the specific issue and guidance for correction.
// 4. Use a combination of input constraints, filters, and data sanitization methods to reduce the risk of application security vulnerabilities.
// Apply these principles throughout the app wherever user inputs are processed.
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