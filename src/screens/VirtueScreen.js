import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { globalStyles, colors } from '../styles/globalStyles';

const VirtueScreen = ({ route }) => {
  const { title, description } = route.params;
  const [checked, setChecked] = useState(false);

  const handlePress = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>{title}</Text>
      <Text style={globalStyles.subtitle}>{description}</Text>
      <Text style={globalStyles.subtitle}>Reflection Prompt:</Text>
      <Text style={globalStyles.text}>
        Reflect on how you practiced this virtue today and how it affected your
        life.
      </Text>
      <Text style={globalStyles.subtitle}>Daily Tracking:</Text>
      <View style={globalStyles.checkboxContainer}>
        <CheckBox
          title='Practiced today'
          checked={checked}
          onPress={handlePress}
          containerStyle={globalStyles.checkbox}
        />
      </View>
    </ScrollView>
  );
};

VirtueScreen.propTypes = {
  route: PropTypes.object.isRequired,
};

export default VirtueScreen;
