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