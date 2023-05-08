import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { getAuth } from 'firebase/auth';
import { NavigationContainer, createStackNavigator, createBottomTabNavigator, Ionicons } from '@react-navigation';

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

  const signUp = useCallback(async () => {
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
      <TouchableOpacity style={styles.primaryButton} onPress={signUp}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  linkText: {
    color: '#007BFF',
    textAlign: 'center',
  },
  errorText: {
    color: '#FF0000',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default SignUpScreen;