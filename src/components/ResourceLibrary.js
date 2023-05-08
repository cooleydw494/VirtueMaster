import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

const ResourceLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResources, setFilteredResources] = useState(resourceData);

  const searchResources = term => {
    const searchResults = resourceData.filter(resource =>
      resource.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredResources(searchResults);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setFilteredResources(resourceData);
  };

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

export default ResourceLibrary;
