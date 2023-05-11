import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/globalStyles';
import BackgroundImage from '../../assets/custom-svgs/BackgroundImage.js';
import Logo from '../../assets/custom-svgs/Logo.js';

const WelcomeScreenHeader = () => (
  <>
    <BackgroundImage style={globalStyles.background} />
    <Logo style={globalStyles.logo} />
    <Text style={globalStyles.title}>VirtueMaster</Text>
    <Text style={globalStyles.subtitle}>
      Unlock your potential through the practice of virtues.
    </Text>
  </>
);

const WelcomeScreenButtons = () => {
  const navigation = useNavigation();
  return (
    <>
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
      </ TouchableOpacity>
    </>
  );
};

WelcomeScreenButtons.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const WelcomeScreen = React.memo(() => {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.overlay}>
        <WelcomeScreenHeader />
        <WelcomeScreenButtons />
      </View>
    </View>
  );
});

export default WelcomeScreen;