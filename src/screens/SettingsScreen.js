import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { globalStyles, colors } from '../styles/globalStyles';
import { getAuth } from "firebase/auth";

const SettingsScreen = ({ navigation }) => {
    const auth = getAuth();

    // Handles user sign out
    const handleSignOut = useCallback(() => {
        auth.signOut()
            .then(() => {
                console.log('User signed out!');
                navigation.navigate('WelcomeScreen');
            })
            .catch((error) => {
                console.log('Error signing out:', error);
            });
    }, [auth, navigation]);

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
                        auth.currentUser
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
    }, [auth, navigation]);

    // Resets the user's progress data
    const handleResetProgress = useCallback(() => {
        // Reset the user's progress data
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