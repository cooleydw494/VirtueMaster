// This configuration file sets up the Firebase connection for the application.

const firebaseConfig = {
  // The API key for the Firebase project
  apiKey: process.env.FIREBASE_API_KEY,
  // The authorized domain for Firebase authentication
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // The Firebase project ID
  projectId: process.env.FIREBASE_PROJECT_ID,
  // The storage bucket for Firebase storage
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // The messaging sender ID for Firebase messaging
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // The Firebase app ID
  appId: process.env.FIREBASE_APP_ID,
};

// Export the configuration object for use in other parts of the application.
export default firebaseConfig;