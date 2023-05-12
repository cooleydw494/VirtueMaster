import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import colorSchemes from '../styles/colorSchemes';
import ProgressChart from '../components/ProgressChart';
import PropTypes from 'prop-types';

const ProgressScreen = () => {
  const selectedTheme = 'theme1';
  const themeColors = colorSchemes[selectedTheme];
  const virtueProgressData = [
    { virtue: 'Temperance', days: [false, true, false, true, false, false, true] },
    { virtue: 'Silence', days: [true, false, true, true, false, true, false] },
    { virtue: 'Order', days: [false, false, false, false, false, false, false] },
    { virtue: 'Resolution', days: [true, true, true, true, true, true, true] },
  ];

  const [userPoints, setUserPoints] = useState(123);
  const [userRewards, setUserRewards] = useState(5);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title} accessibilityLabel="Progress title">Progress</Text>
      {/* userPoints and userRewards represent the user's current points and rewards */}
      <Text style={globalStyles.subtitle} accessibilityLabel="Points">Points: {userPoints}</Text>
      <Text style={globalStyles.subtitle} accessibilityLabel="Rewards">Rewards: {userRewards}</Text>
      <Text style={globalStyles.subtitle} accessibilityLabel="Your Virtue Progress">Your Virtue Progress:</Text>
      <FlatList
        data={virtueProgressData}
        renderItem={({ item }) => (
          <ProgressChart key={item.virtue} virtueData={item} style={[globalStyles.progressChart, { backgroundColor: themeColors.primary }]} />
        )}
        keyExtractor={item => item.virtue}
        accessibilityLabel="virtue progress list"
      />
    </View>
  );
};

ProgressChart.propTypes = {
  virtueData: PropTypes.object.isRequired,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

export default ProgressScreen;