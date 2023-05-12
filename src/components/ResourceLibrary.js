import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Linking, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  clearButton: {
    // Add your desired styles here
  },
});

const ResourceItem = ({
  item,
}) => (
  <View>
    <Text>{item.title}</Text>
    <Text>{item.author}</Text>
    <Text>{item.publicationYear}</Text>
    <Text onPress={() => {
      try {
        Linking.openURL(item.url);
      } catch (error) {
        console.error('Error opening URL:', error);
      }
    }}>View Resource</Text>
  </View>
);

ResourceItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publicationYear: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const ResourceLibrary = ({ resourceData = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResources, setFilteredResources] = useState(resourceData);

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  const searchResources = useCallback(debounce((term) => {
    const searchResults = resourceData.filter(resource =>
      resource.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredResources(searchResults);
  }, 300), [resourceData]);

  const clear_search_callback = useCallback(() => {
    setSearchTerm('');
    setFilteredResources(resourceData);
  }, [resourceData]);

  const memoizedFilteredResources = useMemo(() => filteredResources, [filteredResources]);

  return (
    <View>
      <TextInput
        placeholder='Search resources...'
        value={searchTerm}
        onChangeText={text => {
          setSearchTerm(text);
          searchResources(text);
        }}
        onSubmitEditing={() => searchResources(searchTerm)}
        accessibilityLabel="Search resources input"
      />
      <TouchableOpacity onPress={clear_search_callback} style={styles.clearButton} accessibilityLabel="Clear search button">
        <Text>Clear</Text>
      </TouchableOpacity>
      <FlatList
        data={memoizedFilteredResources}
        keyExtractor={item => item.url}
        renderItem={({ item }) => <ResourceItem item={item} />}
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
  ),
};

export default ResourceLibrary;