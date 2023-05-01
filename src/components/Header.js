import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
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