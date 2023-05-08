import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';
import GoalItem from '../components/GoalItem';
import { globalStyles, colors } from '../styles/globalStyles';

const GoalsScreen = ({ goals }) => {
  const renderItem = ({ item }) => (
    <GoalItem title={item.title} description={item.description} />
  );

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Goals</Text>
      <FlatList
        data={goals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
      />
    </View>
  );
};

GoalsScreen.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GoalsScreen;