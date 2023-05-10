import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';
import GoalItem from '../components/GoalItem';
import { globalStyles, colors } from '../styles/globalStyles';

const renderItem = ({ item }) => (
  <GoalItem key={item.id} title={item.title} description={item.description} />
);

const GoalsScreen = ({ goals = [] }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Goals</Text>
      {goals.length === 0 && <Text style={globalStyles.subtitle}>No goals to display</Text>}
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
  ),
};

GoalsScreen.defaultProps = {
  goals: [],
};

export default GoalsScreen;