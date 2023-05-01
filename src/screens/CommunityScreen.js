import React, { useState, useContext } from 'react';
import { View, FlatList, Text, TouchableOpacity, AccessibilityInfo, StyleSheet } from 'react-native';
import EmojiSelector from 'react-native-emoji-selector';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';

import Post from './components/Post';
import Comment from './components/Comment';
import Reflection from './components/Reflection';
import { CommunityContext } from './context/CommunityContext';

const CommunityStack = createStackNavigator();

const CommunityScreen = () => {
  const { posts, comments, reflections } = useContext(CommunityContext);

  const renderItem = ({ item }) => {
    return <Text>{item.title}</Text>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <>
            <Text style={styles.titleText}>Community</Text>
            <TouchableOpacity accessibilityLabel="Posts">
              <Text>Posts</Text>
            </ TouchableOpacity>
            <TouchableOpacity accessibilityLabel="Comments">
              <Text>Comments</Text>
            </TouchableOpacity>
            <TouchableOpacity accessibilityLabel="Reflections">
              <Text>Reflections</Text>
            </TouchableOpacity>
          </>
        }
      />
    </View>
  );
};

CommunityScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  reflections: PropTypes.array.isRequired
};

const CommunityStackScreen = () => {
  return (
    <CommunityStack.Navigator>
      <CommunityStack.Screen name="Community" component={CommunityScreen} label="Community"/>
      <CommunityStack.Screen name="Posts" component={Post} label="Posts"/>
      <CommunityStack.Screen name="Comments" component={Comment} label="Comments"/>
      <CommunityStack.Screen name="Reflections" component={Reflection} label="Reflections"/>
    </CommunityStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default CommunityStackScreen;