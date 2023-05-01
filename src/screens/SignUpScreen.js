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