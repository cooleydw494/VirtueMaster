import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { globalStyles, colors } from '../styles/globalStyles';
import Card from "../components/Card"
import pool from '../database/connect';

const HomeScreen = ({ navigation }) => {
  if (!navigation) {
    throw new Error('Navigation prop is missing');
  }

  const [virtues, setVirtues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVirtues = async () => {
      try {
        const result = await pool.query('SELECT * FROM virtues');
        setVirtues(result.rows);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchVirtues();
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

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Virtues</Text>
      <FlatList
        data={virtues}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Card>
              <Text style={globalStyles.cardTitle}>{item.title}</Text>
              <Text style={globalStyles.cardSubtitle}>{item.description}</Text>
            </Card>
          </TouchableOpacity>
        )}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default React.memo(HomeScreen);