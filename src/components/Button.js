import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { globalStyles, colors } from '../styles/globalStyles';

// Button component for handling user interactions
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
  style: PropTypes.object,
  textStyle: PropTypes.object,
};

Button.defaultProps = {
  style: {},
  textStyle: {},
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
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

/* CodeMonkey Comments:

- Button.js is a reusable button component for handling user interactions in the VirtueMaster app.
- Styled with the globalStyles from '../styles/globalStyles', this component accepts title, onPress, style, and textStyle as props.
*/

/* Additional CodeMonkey Comments:

- The Button component currently only supports a rounded rectangular shape based on borderRadius styling. Consider adding the option to set the borderRadius from its parent component for more versatility and styling options.

- To make the Button component more adaptive to different scenarios, consider allowing more button states, such as disabled or active, with their corresponding visual styles.
*/


/* CodeMonkey Comments:

- Button.js is a reusable button component for handling user interactions in the VirtueMaster app.
- Styled with the globalStyles from '../styles/globalStyles', this component accepts title, onPress, style, and textStyle as props.

Additional CodeMonkey Comments:

- The Button component currently only supports a rounded rectangular shape based on borderRadius styling. Consider adding the option to set the borderRadius from its parent component for more versatility and styling options.

- To make the Button component more adaptive to different scenarios, consider allowing more button states, such as disabled or active, with their corresponding visual styles.
*/
