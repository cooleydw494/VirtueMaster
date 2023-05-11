import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

// Header component displays a title in a styled container
const Header = ({ title, textColor, backgroundColor }) => {
  return (
    <View style={[styles.headerContainer, { backgroundColor }]}>
      <Text style={[styles.headerText, { color: textColor }]}>{title}</Text>
    </View>
  );
};

// propTypes and defaultProps are used for type checking and setting default values for the component's props
Header.propTypes = {
  title: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string
};

Header.defaultProps = {
  title: 'App Header',
  textColor: '#333',
  backgroundColor: '#f5f5f5'
};

// The styles object contains the styling for the Header component
const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 40,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default Header;