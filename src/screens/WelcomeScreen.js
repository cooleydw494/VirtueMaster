import React from 'react';\nimport { View, Text, TouchableOpacity } from 'react-native';\nimport { globalStyles } from '../styles/globalStyles';\nimport Svg, { Path } from 'react-native-svg';\nimport BackgroundImage from '../../assets/custom-svgs/BackgroundImage.js';\nimport Logo from '../../assets/custom-svgs/Logo.js';\n\nconst WelcomeScreen = ({ navigation }) => {\n  return (\n    <View style={globalStyles.container}>\n      <View style={globalStyles.overlay}>\n        <BackgroundImage style={globalStyles.background}/>\n        <Logo style={globalStyles.logo} />\n        <Text style={globalStyles.title}>VirtueMaster</Text>\n        <Text style={globalStyles.subtitle}>\n          Unlock your potential through the practice of virtues.\n        </Text>\n        <TouchableOpacity\n          style={globalStyles.primaryButton}\n          onPress={() => navigation.navigate('SignInScreen')}\n        >\n        <Text style={globalStyles.buttonText}>Sign In</Text>\n        </TouchableOpacity>\n        <TouchableOpacity\n          style={globalStyles.secondaryButton}\n          onPress={() => navigation.navigate('SignUpScreen')}\n        >\n          <Text style={globalStyles.buttonText}>Sign Up</Text>\n        </TouchableOpacity>\n      </View>\n    </View>\n  );\n};\n\nexport default WelcomeScreen;

/* CodeMonkey Comments:

- WelcomeScreen.js displays the Welcome screen for the VirtueMaster app.
- The screen has SignIn and SignUp buttons for navigation.
- The custom Logo and BackgroundImage SVG components are imported and used in this screen.
*/\n/* Additional CodeMonkey Comments:\n\n- The WelcomeScreen.js file has implemented Welcome and Sign-In/Sign-Up screens as per the README.md.\n- No major improvements or changes identified at this moment.\n\n*/

// Task 1: Implement Welcome and Authentication Screens
// WelcomeScreen.js
// 1. Ensure a visually appealing and user-friendly design for the Welcome Screen.
// 2. Incorporate brand colors and visuals to create a cohesive look and feel.
// 3. Clearly display the options to sign in or sign up, as well as any guest access or demo features.
// 4. Utilize animations or transitions to enhance the user experience and overall polish of the screen.
// 5. Ensure a direct and seamless transition to SignInScreen and SignUpScreen, as well as any other related screens.

// Task 19: Add a user onboarding tutorial to guide new users
// 1. Create a series of introductory screens or tooltips to guide users through the app's main features and functionality.
// 2. Design the tutorial to be visually appealing and engaging.
// 3. Ensure the tutorial can be easily updated as new features are added.
// 4. Allow users to skip the tutorial if they prefer, but make it easily accessible from the settings or help pages.