import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';
import ProgressChart from '../components/ProgressChart';
import { globalStyles, colors } from '../styles/globalStyles';

const ProgressScreen = () => {
  const virtueProgressData = [
    { virtue: 'Humility', progress: 0.7 },
    { virtue: 'Patience', progress: 0.5 },
    { virtue: 'Charity', progress: 0.6 },
    { virtue: 'Kindness', progress: 0.8 },
    { virtue: 'Temperance', progress: 0.4 },
    { virtue: 'Diligence', progress: 0.3 },
    { virtue: 'Chastity', progress: 0.9 },
  ];

  const userPoints = 123;
  const userRewards = 5;

  return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Progress</Text>
        <Text style={globalStyles.subtitle}>Points: {userPoints}</Text>
        <Text style={globalStyles.subtitle}>Rewards: {userRewards}</Text>
        <Text style={globalStyles.subtitle}>Your Virtue Progress:</Text>
        <FlatList
          data={virtueProgressData}
          renderItem={({ item }) => (
            <ProgressChart key={item.virtue} virtueData={item} style={[globalStyles.progressChart, {backgroundColor: colors.primary}]} />
          )}
          keyExtractor={item => item.virtue}
        />
      </View>
  );
};

ProgressScreen.propTypes = {
  userPoints: PropTypes.number.isRequired,
  userRewards: PropTypes.number.isRequired,
  virtueProgressData: PropTypes.arrayOf(PropTypes.shape({
    virtue: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
  })).isRequired,
};

export default ProgressScreen;