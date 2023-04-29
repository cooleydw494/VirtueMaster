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
