const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;


/* CodeMonkey Comments:

- connect.js sets up the connection to the PostgreSQL database for the VirtueMaster app.
- The Pool class from the 'pg' library is used to create a new connection pool.
- The DATABASE_URL environment variable stores the PostgreSQL connection string.
- SSL is enabled with 'rejectUnauthorized' set to false to allow connections to self-signed certificate hosts.
*/

// Task 23: Implement a backup and sync feature for data access across multiple devices
// 1. Enable Firebase Realtime Database or Cloud Firestore to store user data and synchronize it across devices.
// 2. Implement a data synchronization mechanism for user data entered on different devices.
// 3. Ensure that the data backup and sync feature works as expected, both online and offline.
// 4. Handle potential conflicts and edge cases in the data synchronization process.

// Task 10: Ensure secure handling of Firebase credentials and improve app security
// 1. Configure Firebase rules to limit access to authorized users and specific data.
// 2. Add authentication and authorization to protect sensitive user data.
// 3. Keep Firebase packages up to date to ensure you have the latest security patches and improvements.

// Task 10: Ensure secure handling of Firebase credentials and improve app security
// To improve security and protect user data:
// 1. Store Firebase credentials securely using environment variables, and avoid hardcoding them in the codebase.
// 2. Use Firestore security rules to define access rules (read/write) for different user roles.
// 3. Use Firebase Authentication to authenticate users before granting access to app resources.
// 4. Monitor and restrict API requests to a realistic limit, protecting the backend from potential attacks.
// 5. Regularly update dependencies and libraries, patching known security vulnerabilities.
// Apply security best practices throughout the app to ensure a secure user experience.
/*
Project Overview:

1. globalStyles.js: Base styles
   - container, titleText, paragraph, input, button, buttonText
   Usage: globalStyles.container, etc.
2. PostgreSQL DB: Tables & Columns
   - users: firebase_uid, email, display_name, provider, profile_picture_url, points, rewards, created_at, updated_at
   - virtues: name, description, short_description, icon_name, created_at, updated_at
   - user_virtues: current_streak, longest_streak, total_days, total_successes, total_failures
   - daily_virtue_entries: entry_date, status, notes, rating
   - milestone_definitions: name, description, progress_requirement, icon_name, created_at, updated_at
   - milestones: achieved_date
   - user_milestones: notes, rating
   - goals: title, description, target_date, status
   - notifications: title, message, is_read, created_at, updated_at
   - weekly_focus_virtues: start_date, end_date
   - focus_virtue_entries: entry_date, status, notes, rating
   - points_log: points, description, created_at
   - rewards_log: rewards, description, created_at
3. connect.js: Connect to DB
   - Import 'pg', 'dotenv', create & export 'Pool' instance
   Usage: Import 'pool' in other modules to query the database
4. Directory Structure:
   - App.js: Main entry point
   - README.md: Documentation
   - assets: Images & SVGs
     - custom-pngs: PNG files
       - logo.png: App logo (PNG)
     - custom-svgs: SVG files & components
       - BackgroundImage.js, Logo.js: SVG components
       - background-image.svg, logo.svg: SVG files
   - src: App components, screens, styles & utilities
     - components: Reusable components
       - Button.js, Card.js, Header.js, ProgressChart.js, ResourceLibrary.js
     - database: DB connection & scripts
       - connect.js, createBaseTables.js, createBaseTables.sql, seedTestData.js, seedTestData.sql
     - screens: App screens
       - CommunityScreen.js, GoalsScreen.js, HomeScreen.js, ProgressScreen.js, SettingsScreen.js, SignInScreen.js, SignUpScreen.js, VirtueScreen.js, WelcomeScreen.js
     - styles: Global styles
       - globalStyles.js
     - utilities: Utility functions
       - FetchWrapper.js
     - utils: Additional utilities
       - NotificationsManager.js, pointsSystem.js
*/
