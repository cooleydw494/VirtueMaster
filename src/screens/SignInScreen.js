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

// Task 1: Implement Welcome and Authentication Screens
// SignInScreen.js
// 1. Ensure a visually appealing and user-friendly design for the SignIn Screen.
// 2. Incorporate clear fields for users to input their email address and password.
// 3. Implement error handling and input validation for user inputs.
// 4. Integrate with the authentication service to securely sign in users and manage sessions.
// 5. Provide intuitive navigation to other screens, such as SignUpScreen, Forgot Password, or back to WelcomeScreen.
// 6. Utilize animations or transitions to enhance the user experience and overall polish of the screen.

// Task 18: Implement error handling and input validation for user inputs
// 1. Validate email format and display an error message on incorrect input.
// 2. Validate password length and display an error message if it does not meet minimum requirements.
// 3. Ensure that an error message is displayed if the user authentication fails, such as incorrect email or password.
// 4. Add any necessary try-catch blocks to handle errors in the authentication process.

// Task 11: Improve user interface and overall user experience
// 1. Revisit the design and layout to ensure it is visually appealing and user-friendly.
// 2. Add more user feedback, such as loading indicators and tooltips.
// 3. Test the screen on various devices and orientations to ensure responsiveness and consistency in the layout.

// Task 15: Add comments for better readability and maintainability
// Consider adding comments to the following areas:
// 1. Functions and methods, including their purpose and parameters
// 2. Variables, states, and useEffects to clarify their purpose and usage
// 3. Code blocks and loops to describe the logic
// 4. Components and custom hooks, including their role and interactions with other components
// 5. Conditional logic and its reasoning
// 6. Edge cases and any specific assumptions.
// Note: Apply these principles as appropriate throughout the codebase.