import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { styles } from './VirtueScreenStyles';

const useIsPracticedToday = (initialState) => {
  const [isPracticedToday, setIsPracticedToday] = useState(initialState);

  const handlePress = useCallback(() => {
    setIsPracticedToday(!isPracticedToday);
  }, [isPracticedToday]);

  return [isPracticedToday, handlePress];
};

const VirtueScreen = React.memo(({ route }) => {
  const { title, description } = route.params;
  const [isPracticedToday, handlePress] = useIsPracticedToday(false);

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
          key="practicedTodayCheckbox"
        />
      </View>
    </ScrollView>
  );
});

VirtueScreen.propTypes = {
  route: PropTypes.object.isRequired,
};

export default VirtueScreen;