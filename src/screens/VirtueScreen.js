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

/* CodeMonkey Comments:

- VirtueScreen.js is the screen for each virtue in the VirtueMaster app.
- It receives the title and description of a virtue as props.
- Users can toggle a checkbox to indicate whether they practiced the virtue for the day.
- A reflection prompt is provided for users to contemplate the effects of that virtue on their life.
*/
/* CodeMonkey Comments:

- VirtueScreen.js is the screen for each virtue in the VirtueMaster app.
- It receives the title and description of a virtue as props.
- Users can toggle a checkbox to indicate whether they practiced the virtue for the day.
- A reflection prompt is provided for users to contemplate the effects of that virtue on their life.
*/

/* Proposed CodeMonkey Changes:

- Implement a function that saves the user's input when the checkbox is toggled.
- The function should be triggered on the onPress event of the CheckBox component.
- The user's input should be submitted to the backend, presumably through an API or query.

Please note that due to limited information about the backend, a precise implementation cannot be provided at this moment. Adjust this code based on the backend's design.
*/