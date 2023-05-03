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
                    {error && <Text style={globalStyles.errorText}>{error}</Text>} /*editor says "Type Unknown is not assignable to React.ReactNode*/
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
                    <TouchableOpacity style={globalStyles.primaryButton} onPress={signIn} disabled={loading}>
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

/*
TODO:
- Utilize database and/or firebase functionality to improve
- Implement 'Forgot Password?' for firebase auth
- Implement error handling and input validation for user inputs.
- Ensure that an error message is displayed if the user authentication fails, such as incorrect email or password.
 */
/*
  VirtueMaster PostgreSQL Database Usage Guide
  Purpose: Utility module for PostgreSQL/Firestore interactions.
  Exported from database/connect.js:
- pool, firestore
- getUser(uid)
- createUser(data)
- updateUser(uid, updates)
- getAllVirtues()
- getVirtue(id)
- getUserVirtue(uid, vid)
- updateUserVirtue(uid, vid, updates)
- getDailyVirtueEntry(uid, vid, date)
- createDailyVirtueEntry(data)
- updateDailyVirtueEntry(uid, vid, date, updates)
- getAllMilestoneDefinitions()
- getMilestoneDefinition(mid)
- getMilestone(uid, mid)
- createMilestone(uid, data)
- getUserMilestone(uid, mid)

VirtueMaster PostgreSQL Database Schema:
- users: firebase_uid, email, display_name, provider, profile_picture_url, points, rewards, created_at, updated_at
- virtues: id, name, description, short_description, icon_name, created_at, updated_at
- user_virtues: user_id, virtue_id, current_streak, longest_streak, total_days, total_successes, total_failures
- daily_virtue_entries: user_id, virtue_id, entry_date, status, notes, rating
- milestone_definitions: id, name, description, progress_requirement, icon_name, created_at, updated_at
- milestones: user_id, milestone_definition_id, achieved_date
- user_milestones: user_id, milestone_id, notes, rating
- goals: user_id, title, description, target_date, status
- notifications: user_id, title, message, is_read, created_at, updated_at
- weekly_focus_virtues: user_id, virtue_id, start_date, end_date
- focus_virtue_entries: user_id, focus_virtue_id, entry_date, status, notes, rating
- points_log: user_id, points, description, created_at
- rewards_log: user_id, rewards, description, created_at
*/
