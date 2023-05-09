import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Linking, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ResourceLibrary = ({ resourceData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResources, setFilteredResources] = useState(resourceData);

  const searchResources = useCallback(term => {
    const searchResults = resourceData.filter(resource =>
      resource.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredResources(searchResults);
  }, [resourceData]);

  const clearSearch = useCallback(() => {
    setSearchTerm('');
    setFilteredResources(resourceData);
  }, [resourceData]);

  return (
    <View>
      <TextInput
        placeholder='Search resources...'
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
        onSubmitEditing={() => searchResources(searchTerm)}
      />
      <TouchableOpacity onPress={clearSearch}>
        <Text>Clear</Text>
      </TouchableOpacity>
      <FlatList
        data={filteredResources}
        keyExtractor={item => item.url}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.author}</Text>
            <Text>{item.publicationYear}</Text>
            <Text onPress={() => Linking.openURL(item.url)}>View Resource</Text>
          </View>
        )}
      />
    </View>
  );
};

ResourceLibrary.propTypes = {
  resourceData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publicationYear: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ResourceLibrary;