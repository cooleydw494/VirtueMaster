import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, ViewPropTypes } from 'react-native';
import { globalStyles, colors } from '../styles/globalStyles';
const { primary } = colors;

// Button component for handling user interactions
// Props:
// - title: The text displayed on the button
// - onPress: The function to be called when the button is pressed
// - style: Optional additional styles for the button container
// - textStyle: Optional additional styles for the button text
const Button = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[globalStyles.text, styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  textStyle: ViewPropTypes.style,
};

Button.defaultProps = {
  style: {},
  textStyle: {},
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

export default Button;