import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

// Header component displays a title in a styled container
const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

// propTypes and defaultProps are used for type checking and setting default values for the component's props
Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: 'Default Title'
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  }
});

export default Header;