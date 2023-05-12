import React from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { globalStyles } from '../styles/globalStyles';
import PropTypes from 'prop-types';
import { useSignIn } from '../hooks/useSignIn';
import SignInForm from '../components/SignInForm';

// Validation schema for the sign in form
const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

// Sign in screen component
const SignInScreen = ({ navigation }) => {
    const { signIn, loading, error } = useSignIn();

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={SignInSchema}
            onSubmit={(values) => signIn(values, navigation)}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={globalStyles.container}>
                    <Text style={globalStyles.title}>Sign In</Text>
                    {error && <React.Fragment><Text style={globalStyles.errorText}>{error}</Text></React.Fragment>}
                    <SignInForm
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        handleSubmit={handleSubmit}
                        values={values}
                        errors={errors}
                        touched={touched}
                        loading={loading}
                    />
                </View>
            )}
        </Formik>
    );
};

// Prop types validation
SignInScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

// Display name for debugging purposes
SignInScreen.displayName = 'SignInScreen';

export default SignInScreen;