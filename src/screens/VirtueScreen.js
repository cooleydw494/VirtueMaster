import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { globalStyles, colors } from '../styles/globalStyles';

// The VirtueScreen component displays information about a specific virtue and allows the user to track their daily practice.
const VirtueScreen = ({ route }) => {
  const { title, description } = route.params;
  const [isPracticedToday, setIsPracticedToday] = useState(false);

  const handlePress = useCallback(() => {
    setIsPracticedToday(!isPracticedToday);
  }, [isPracticedToday]);

  const styles = useMemo(() => ({
    ...globalStyles,
    checkboxContainer: {
      ...globalStyles.checkboxContainer,
      backgroundColor: colors.light,
    },
  }), []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{description}</Text>
      <Text style={styles.subtitle}>Reflection Prompt:</Text>
      <Text style={styles.text}>
        Reflect on how you practiced this virtue today and how it affected your
        life.
      </Text>
      <Text style={styles.subtitle}>Daily Tracking:</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          title='Practiced today'
          checked={isPracticedToday}
          onPress={handlePress}
          containerStyle={styles.checkbox}
        />
      </View>
    </ScrollView>
  );
};

VirtueScreen.propTypes = {
  route: PropTypes.object.isRequired,
};

export default VirtueScreen;