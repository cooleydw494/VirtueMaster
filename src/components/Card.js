import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { colors } from '../styles/globalStyles';

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default Card;

/* CodeMonkey Comments:

- Card.js is a reusable card component.
- It accepts children as props, which can be any React element(s) to be displayed within the card.
- This component can be used to create cards with different content throughout the app while maintaining consistent styling.
- It uses propTypes to enforce the required 'children' prop.
*/
/* CodeMonkey Comments:

- Card.js is a reusable card component.
- It accepts children as props, which can be any React element(s) to be displayed within the card.
- This component can be used to create cards with different content throughout the app while maintaining consistent styling.
- It uses propTypes to enforce the required 'children' prop.
*/
