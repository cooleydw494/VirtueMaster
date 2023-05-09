import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { globalStyles, colors } from '../styles/globalStyles';
import PropTypes from 'prop-types';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={SignInSchema}
            onSubmit={signIn}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={globalStyles.container}>
                    <Text style={globalStyles.title}>Sign In</Text>
                    {error && <React.Fragment><Text style={globalStyles.errorText}>{error}</Text></React.Fragment>}
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
                        accessibilityLabel='Email input'
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
                        accessibilityLabel='Password input'
                    />
                    {errors.password && touched.password && <Text style={globalStyles.errorText}>{errors.password}</Text>}
                    <TouchableOpacity style={globalStyles.primaryButton} onPress={handleSubmit} disabled={loading} accessibilityLabel='Sign In button'>
                        {loading ? (
                            <ActivityIndicator size='small' color={colors.white} />
                        ) : (
                            <Text style={globalStyles.buttonText}>Sign In</Text>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        accessibilityLabel='Navigate to Sign Up screen'
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

SignInScreen.displayName = 'SignInScreen';

export default SignInScreen;