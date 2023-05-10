import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
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

const WelcomeScreenButtons = ({ navigation }) => (
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

const WelcomeScreen = React.memo(({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.overlay}>
        <WelcomeScreenHeader />
        <WelcomeScreenButtons navigation={navigation} />
      </View>
    </View>
  );
});

WelcomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default WelcomeScreen;