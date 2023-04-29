import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { globalStyles, colors } from '../styles/globalStyles';
import PropTypes from 'prop-types';
// Consider importing a form validation library

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signIn = async () => {
    setLoading(true);
    setError(null);
    // TODO: Firebase authentication logic goes here
    // TODO: Handle possible authentication errors
    setLoading(false);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Sign In</Text>
      {error && <Text style={globalStyles.errorText}>{error}</Text>}
      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCompleteType="email"
        // Add form validation logic
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        autoCompleteType="password"
        // Add form validation logic
      />
      <TouchableOpacity style={globalStyles.primaryButton} onPress={signIn} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          <Text style={globalStyles.buttonText}>Sign In</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUpScreen')}
      >
        <Text style={globalStyles.linkText}>
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

SignInScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignInScreen;

/* CodeMonkey Comments:

- Consider adding form validation for the email and password inputs.
- Implement Firebase authentication logic within the signIn function.
*/

/* Suggested Libraries for Form Validation:

- useForm (part of the React Hook Form library): https://react-hook-form.com/api/useform
- Formik: https://formik.org/docs/overview
- Redux Form: https://redux-form.com/8.3.0/
*/
