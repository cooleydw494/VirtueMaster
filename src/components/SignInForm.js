import React from 'react';
import { TextInput, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Field } from 'formik';
import { globalStyles, colors } from '../styles/globalStyles';

const SignInForm = ({ handleChange, handleBlur, handleSubmit, values, errors, touched, loading }) => (
    <React.Fragment>
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
    </React.Fragment>
);

export default SignInForm;