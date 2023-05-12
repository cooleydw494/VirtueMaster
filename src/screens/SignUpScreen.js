import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { getAuth } from 'firebase/auth';
import { styles } from './SignUpScreenStyles';

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

  const handleSignUp = useCallback(async () => {
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    setErrorMessage('');
    try {
      const auth = getAuth();
      await auth.createUserWithEmailAndPassword(email, password);
      Alert.alert('Successfully signed up!');
      setLoading(false);
      navigation.navigate('SignInScreen');
    } catch (error) {
      Alert.alert('Error:', error.message);
      setLoading(false);
    }
  }, [email, password, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={setEmail}
        value={email}
        keyboardType='email-address'
        autoCompleteType='email'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        autoCompleteType='password'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder='Confirm Password'
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry
        autoCompleteType='password'
        autoCapitalize='none'
      />
      <TouchableOpacity style={styles.primaryButton} onPress={handleSignUp}>
        {loading ? (
          <ActivityIndicator size='small' color='#FFFFFF' />
        ) : (
          <Text style={styles.buttonText}>Sign Up</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignInScreen')}
      >
        <Text style={styles.linkText}>
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

SignUpScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignUpScreen;