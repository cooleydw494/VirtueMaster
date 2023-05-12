import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { globalStyles, colors } from '../styles/globalStyles';
import { getAuth } from "firebase/auth";

// The SettingsScreen component contains user settings options, such as sign out, reset progress, and delete account.
const SettingsScreen = ({ navigation }) => {
    const firebaseAuth = getAuth();

    // Handles user sign out
    const handleSignOut = useCallback(() => {
        firebaseAuth.signOut()
            .then(() => {
                console.log('User signed out!');
                navigation.navigate('WelcomeScreen');
            })
            .catch((error) => {
                console.log('Error signing out:', error);
            });
    }, [firebaseAuth, navigation]);

    // Handles user account deletion
    const handleAccountDeletion = useCallback(() => {
        Alert.alert(
            'Delete Account',
            'Are you sure you want to delete your account? This action cannot be undone.',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        firebaseAuth.currentUser
                            .delete()
                            .then(() => {
                                console.log('User account deleted!');
                                navigation.navigate('WelcomeScreen');
                            })
                            .catch((error) => {
                                console.log('Error deleting user account:', error);
                            });
                    },
                    style: 'destructive',
                },
            ],
            { cancelable: false }
        );
    }, [firebaseAuth, navigation]);

    // Resets the user's progress data
    const handleResetProgress = useCallback(() => {
        Alert.alert(
            'Reset Progress',
            'Are you sure you want to reset your progress? This action cannot be undone.',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Reset',
                    onPress: () => {
                        // Reset the user's progress data
                        try {
                            // Code to reset user's progress data
                        } catch (error) {
                            console.log('Error resetting user progress:', error);
                        }
                    },
                    style: 'destructive',
                },
            ],
            { cancelable: false }
        );
    }, []);

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Settings</Text>

            <TouchableOpacity
                style={[globalStyles.button, { backgroundColor: colors.secondary }]}
                onPress={handleSignOut}
            >
                <Text style={globalStyles.buttonText}>Sign Out</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[globalStyles.button, { backgroundColor: colors.secondary }]}
                onPress={handleResetProgress}
            >
                <Text style={globalStyles.buttonText}>Reset Progress</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[globalStyles.button, { backgroundColor: colors.secondary }]}
                onPress={handleAccountDeletion}
            >
                <Text style={globalStyles.buttonText}>Delete Account</Text>
            </TouchableOpacity>
        </View>
    );
};

SettingsScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default SettingsScreen;