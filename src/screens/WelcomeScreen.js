import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles, colors } from '../styles/globalStyles';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>VirtueMaster</Text>
      <Text style={globalStyles.subtitle}>
        Unlock your potential through the practice of virtues.
      </Text>
      <TouchableOpacity
        style={globalStyles.primaryButton}
        onPress={() => navigation.navigate('SignInScreen')}
      >
        <Text style={globalStyles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.secondaryButton}
        onPress={() => navigation.navigate('SignUpScreen')}
      >
        <Text style={globalStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
