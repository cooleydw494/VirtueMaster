import React from 'react';
import { View, Text } from 'react-native';
// import ProgressChart from '../components/ProgressChart';
import { globalStyles, colors } from '../styles/globalStyles';

const ProgressScreen = () => {
  // Dummy data for demonstration purposes
  const progressData = [
    { virtue: 'Humility', progress: 0.7 },
    { virtue: 'Patience', progress: 0.5 },
    { virtue: 'Charity', progress: 0.6 },
    { virtue: 'Kindness', progress: 0.8 },
    { virtue: 'Temperance', progress: 0.4 },
    { virtue: 'Diligence', progress: 0.3 },
    { virtue: 'Chastity', progress: 0.9 },
  ];

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Progress</Text>
      <Text style={globalStyles.subtitle}>Your Virtue Progress:</Text>
{/*       {progressData.map((virtueData, index) => (
        <ProgressChart key={index} virtueData={virtueData} />
      ))} */}
    </View>
  );
};

export default ProgressScreen;

/* CodeMonkey Comments:

- ProgressScreen.js will display the progress of virtues for the user.
- The screen currently contains dummy data for demonstration purposes.
- The ProgressChart component is commented out, and it should be imported and used when available to display the progress for each virtue in a visually appealing manner.
- Uncomment the import, ProgressChart component usage, and the map function when the ProgressChart component is ready.
*/
import ProgressChart from '../components/ProgressChart';
{/*       {progressData.map((virtueData, index) => (
        <ProgressChart key={index} virtueData={virtueData} />
      ))} */}