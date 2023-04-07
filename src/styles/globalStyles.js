import { StyleSheet } from 'react-native';

const colors = {
  primary: '#4A90E2',
  secondary: '#FFA726',
  background: '#F5F5F5',
  text: '#424242',
  accent: '#81C784',
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.text,
    fontFamily: 'Roboto',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: colors.text,
    fontFamily: 'Open Sans',
    marginBottom: 50,
  },
  text: {
    fontSize: 16,
    color: colors.text,
    fontFamily: 'Open Sans',
  },
  smallText: {
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Open Sans',
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Open Sans',
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
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    fontFamily: 'Roboto',
    marginBottom: 10,
  },
  cardSubtitle: {
    fontSize: 16,
    color: colors.text,
    fontFamily: 'Open Sans',
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
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
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Open Sans',
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
    fontSize: 16,
    color: colors.text,
    fontFamily: 'Open Sans',
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
tabBarIcon: {
fontSize: 24,
color: colors.primary,
},
tabBarLabel: {
fontSize: 14,
color: colors.text,
fontFamily: 'Open Sans',
},
modal: {
backgroundColor: '#FFFFFF',
borderRadius: 5,
padding: 20,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
},
modalTitle: {
fontSize: 24,
fontWeight: 'bold',
color: colors.text,
fontFamily: 'Roboto',
marginBottom: 20,
},
modalText: {
fontSize: 16,
color: colors.text,
fontFamily: 'Open Sans',
marginBottom: 20,
},
separator: {
height: 1,
backgroundColor: colors.background,
marginVertical: 10,
},
badge: {
backgroundColor: colors.secondary,
paddingHorizontal: 6,
paddingVertical: 2,
borderRadius: 5,
},
badgeText: {
fontSize: 12,
color: '#FFFFFF',
fontFamily: 'Open Sans',
},
gradientBackground: {
borderRadius: 5,
paddingHorizontal: 20,
paddingVertical: 10,
marginBottom: 10,
},
formGroup: {
marginBottom: 20,
},
formControl: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
},
switch: {
marginRight: 20,
},
slider: {
width: '100%',
height: 40,
},
datePicker: {
width: '100%',
},
});

export { globalStyles, colors };