import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  linkText: {
    color: '#007BFF',
    textAlign: 'center',
  },
  errorText: {
    color: '#FF0000',
    marginBottom: 10,
    textAlign: 'center',
  },
});