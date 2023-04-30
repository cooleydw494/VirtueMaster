import React from 'react';\nimport PropTypes from 'prop-types';\nimport { View, StyleSheet } from 'react-native';\nimport { colors } from '../styles/globalStyles';\n\nconst Card = ({ children }) => {\n  return <View style={styles.card}>{children}</View>;\n};\n\nCard.propTypes = {\n  children: PropTypes.node.isRequired,\n};\n\nconst styles = StyleSheet.create({\n  card: {\n    backgroundColor: colors.cardBackground,\n    borderRadius: 5,\n    marginVertical: 10,\n    paddingHorizontal: 15,\n    paddingVertical: 10,\n  },\n});\n\nexport default Card;

/* CodeMonkey Comments:

- Card.js is a reusable card component.
- It accepts children as props, which can be any React element(s) to be displayed within the card.
- This component can be used to create cards with different content throughout the app while maintaining consistent styling.
- It uses propTypes to enforce the required 'children' prop.
*/
/* CodeMonkey Comments:

- Card.js is a reusable card component.
- It accepts children as props, which can be any React element(s) to be displayed within the card.
- This component can be used to create cards with different content throughout the app while maintaining consistent styling.
- It uses propTypes to enforce the required 'children' prop.
*/