import { StyleSheet } from 'react-native';

const colors = {
  primary: '#4A90E2',
  secondary: '#FFA726',
  background: '#F5F5F5',
  text: '#424242',
  accent: '#81C784',
};

const globalStyles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  logo: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    color: colors.text,
    fontFamily: 'Roboto',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: colors.text,
    fontFamily: 'Open Sans',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 'auto',
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Open Sans',
    fontSize: 18,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: colors.text,
    fontFamily: 'Open Sans',
    fontSize: 16,
  },
  smallText: {
    color: colors.text,
    fontFamily: 'Open Sans',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    color: colors.text,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardSubtitle: {
    color: colors.text,
    fontFamily: 'Open Sans',
    fontSize: 16,
  },
  progressChart: {
    backgroundColor: colors.accent,
    borderRadius: 5,
    padding: 20,
  },
  header: {
    backgroundColor: colors.primary,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderColor: colors.text,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: colors.text,
    fontFamily: 'Open Sans',
    marginBottom: 20,
  },
  label: {
    color: colors.text,
    fontFamily: 'Open Sans',
    fontSize: 14,
    marginBottom: 5,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: colors.background,
    borderBottomWidth: 1,
  },
  listItemText: {
    color: colors.text,
    fontFamily: 'Open Sans',
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    color: colors.primary,
    fontSize: 24,
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.background,
    paddingVertical: 10,
  },
});

export { globalStyles, colors };


/* CodeMonkey Comments:

- This globalStyles.js file contains centralized styles and colors for the VirtueMaster app.
- The included styles are used across the app, making it easier to create a consistent user interface and modify styles globally.
*//* CodeMonkey: This file contains the global styles for the VirtueMaster app. It defines styles and colors, which are well-structured and easy to follow.*/


// Task 22: Add a dark mode option for user preference and comfort
// - Create a new set of color variables for dark mode (e.g., darkColors).
// - Implement a toggle in the app's Settings Screen to switch between light and dark mode.
// - Connect the toggle's state to a global state (using Redux or React Context) so the theme colors can be changed throughout the app.
// - Modify components to use the appropriate color variables based on the theme.
// - Test the app to ensure all components respect the dark mode settings and are displayed correctly.
// - Make sure the dark mode has good contrast and is accessible to users with visual impairments.


// Task 20: Optimize the app for different screen sizes and orientations
// - Research and implement a responsive design approach using React Native's built-in features like flexbox, percentages, and relative dimensions.
// - Adopt the method useStateDimensions for managing orientation changes (provided by 'react-native-hooks').
// - Create different style configurations depending on the screen size and device orientation.
// - Test the app on various devices, including phones and tablets with different screen sizes and multiple orientations.
// - Ensure the usability of the app is not compromised in different screen sizes and orientations.
// - Review the design and layout to maintain a user-friendly interface on all devices and orientations.

// Task 21: Follow accessibility guidelines for a more inclusive user experience
// 1. Ensure text sizes and colors are legible, and contrast ratios meet accessibility standards.
// 2. Make sure interactive elements like buttons and links have sufficient size for easy interaction.
// 3. Add alternative text for images and other non-text content for screen reader users.
// 4. Organize content through semantic HTML for better screen reader support.
// 5. Provide keyboard navigation and focus management, making sure all elements can be accessed using keyboard only.
// 6. Test the app using various accessibility tools and address any issues identified.