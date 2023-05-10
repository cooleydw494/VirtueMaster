import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { globalStyles, colors } from '../styles/globalStyles';
import Card from "../components/Card"
import { fetchVirtues } from '../services/virtueService';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [virtues, setVirtues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchVirtues();
        setVirtues(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePress = useCallback(
      (item) => {
        navigation.navigate('VirtueScreen', item);
      },
      [navigation]
    );

  const keyExtractor = useCallback((item) => `${item.id}-${item.title}`, []);

  if (loading) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.errorText}>Error fetching data. Please try again later.</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Virtues</Text>
      <FlatList
        data={virtues}
        renderItem={({ item }) => (
          <Card onPress={() => handlePress(item)}>
            <Text style={globalStyles.cardTitle}>{item.title}</Text>
            <Text style={globalStyles.cardSubtitle}>{item.description}</Text>
          </Card>
        )}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default React.memo(HomeScreen);