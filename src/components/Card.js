import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { colors } from '../styles/globalStyles';

// Card component is a reusable container for displaying content with a consistent style
const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  children: null,
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
