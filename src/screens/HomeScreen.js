import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles, colors } from '../styles/globalStyles';
import Card from '../components/Card';

const HomeScreen = ({ navigation }) => {
  const [virtues, setVirtues] = useState([]);

  useEffect(() => {
    // Fetch virtues from database here
    // For now, using sample data
    const sampleVirtues = [
      { id: '1', title: 'Virtue 1', description: 'Virtue 1 Description' },
      { id: '2', title: 'Virtue 2', description: 'Virtue 2 Description' },
      { id: '3', title: 'Virtue 3', description: 'Virtue 3 Description' },
    ];

    setVirtues(sampleVirtues);
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Virtues</Text>
      <FlatList
        data={virtues}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('VirtueScreen', item)}
          >
            <Card>
              <Text style={globalStyles.cardTitle}>{item.title}</Text>
              <Text style={globalStyles.cardSubtitle}>{item.description}</Text>
            </Card>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
