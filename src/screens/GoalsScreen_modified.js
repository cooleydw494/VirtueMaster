import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';
import GoalItem from '../components/GoalItem';
import { globalStyles, colors } from '../styles/globalStyles';

const renderItem = React.memo(({ item }) => (
  <GoalItem title={item.title} description={item.description} />
));

const GoalsScreen = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    // Replace the following line with the actual API call or data fetching method
    const fetchGoals = async () => {
      const goalsData = await /* fetch goals data here */;
      setGoals(goalsData);
    };
    fetchGoals();
  }, []);

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

GoalsScreen.propTypes =...