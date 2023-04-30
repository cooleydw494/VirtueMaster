import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { globalStyles, colors } from '../styles/globalStyles';
import PropTypes from 'prop-types';

const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

const SignInScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const signIn = async (values) => {
        setLoading(true);
        setError(null);
        // TODO: Firebase authentication logic goes here
        // TODO: Handle possible authentication errors
        setLoading(false);
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={SignInSchema}
            onSubmit={signIn}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={globalStyles.container}>
                    <Text style={globalStyles.title}>Sign In</Text>
                    {error && <Text style={globalStyles.errorText}>{error}</Text>}
                    <Field
                        component={TextInput}
                        style={globalStyles.input}
                        placeholder='Email'
                        name='email'
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType='email-address'
                        autoCompleteType='email'
                    />
                    {errors.email && touched.email && <Text style={globalStyles.errorText}>{errors.email}</Text>}
                    <Field
                        component={TextInput}
                        style={globalStyles.input}
                        placeholder='Password'
                        name='password'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry
                        autoCompleteType='password'
                    />
                    {errors.password && touched.password && <Text style={globalStyles.errorText}>{errors.password}</Text>}
                    <TouchableOpacity style={globalStyles.primaryButton} onPress={handleSubmit} disabled={loading}>
                        {loading ? (
                            <ActivityIndicator size='small' color={colors.white} />
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
            )}
        </Formik>
    );
};

SignInScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default SignInScreen;

/* CodeMonkey Comments:

- SignInScreen.js now uses Formik and Yup for form validation.
- Remember to run the command `yarn add formik yup` to install Formik and Yup libraries in the project.
- TODO: Implement Firebase authentication logic within the signIn function.
*/

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

...

const signIn = async (values) => {
  setLoading(true);
  setError(null);
  const auth = getAuth();
  try {
    await signInWithEmailAndPassword(auth, values.email, values.password);
    setLoading(false);
    navigation.navigate('HomeScreen');
  } catch (error) {
    setLoading(false);
    setError(error.message);
  }
}; 

/* Updated CodeMonkey Comments:

- SignInScreen.js now uses Formik and Yup for form validation and Firebase for authentication.
- Remember to run the command `yarn add formik yup` to install Formik and Yup libraries in the project.
*/
/* Updated CodeMonkey: Unable to update the file directly. Consider implementing the following code changes:

- Import getAuth and signInWithEmailAndPassword from 'firebase/auth'

- Change signIn to:

  const signIn = async (values) => {
    setLoading(true);
    setError(null);

    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      setLoading(false);
      navigation.navigate('HomeScreen');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

*/