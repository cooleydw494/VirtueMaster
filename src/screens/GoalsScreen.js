import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles, colors } from '../styles/globalStyles';

const GoalsScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Goals</Text>
      <Text>Goals and challenges related to virtues will be displayed here.</Text>
    </View>
  );
};

export default GoalsScreen;