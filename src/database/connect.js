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
// 1. Avoid hardcoding Firebase credentials in the source code. Use environment variables or a secure secrets management solution.
// 2. Configure Firebase rules to limit access to authorized users and specific data.
// 3. Add authentication and authorization to protect sensitive user data.
// 4. Keep Firebase packages up to date to ensure you have the latest security patches and improvements.

// Task 10: Ensure secure handling of Firebase credentials and improve app security
// To improve security and protect user data:
// 1. Store Firebase credentials securely using environment variables, and avoid hardcoding them in the codebase.
// 2. Use Firestore security rules to define access rules (read/write) for different user roles.
// 3. Use Firebase Authentication to authenticate users before granting access to app resources.
// 4. Monitor and restrict API requests to a realistic limit, protecting the backend from potential attacks.
// 5. Regularly update dependencies and libraries, patching known security vulnerabilities.
// Apply security best practices throughout the app to ensure a secure user experience.
/*
  globalStyles.js Cheat Sheet:

  1. container: A base style for wrapping components, provides padding.
  2. titleText: A base style for title text, with font size, weight, and color.
  3. paragraph: A base style for paragraph text, with font size and color.
  4. input: A base style for text input, with border and padding.
  5. button: A base style for buttons, with background color, border, and padding.
  6. buttonText: A base style for button text, with font size, weight, and color.

  Usage: Import globalStyles and use the styles by referencing them, e.g., globalStyles.container.
*/
/*
  PostgreSQL Database Cheat Sheet:

  1. users: Stores user data including firebase_uid, email, display_name, provider, profile_picture_url, points, rewards, created_at, and updated_at.
  2. virtues: Stores the 13 virtues with their name, description, short_description, icon_name, created_at, and updated_at.
  3. user_virtues: Stores user-specific virtue data such as current_streak, longest_streak, total_days, total_successes, total_failures.
  4. daily_virtue_entries: Stores user's daily entries for each virtue with entry_date, status, notes, and rating.
  5. milestone_definitions: Stores milestone definitions with name, description, progress_requirement, icon_name, created_at, and updated_at.
  6. milestones: Stores user's achieved milestones with achieved_date.
  7. user_milestones: Stores additional details of user's milestones such as notes and rating.
  8. goals: Stores user's goals with title, description, target_date, and status.
  9. notifications: Stores user's notifications with title, message, is_read, created_at, and updated_at.
  10. weekly_focus_virtues: Stores user's weekly focus virtues with start_date and end_date.
  11. focus_virtue_entries: Stores user's entries for weekly focus virtues with entry_date, status, notes, and rating.
  12. points_log: Stores user's points log with points, description, and created_at.
  13. rewards_log: Stores user's rewards log with rewards, description, and created_at.

  Usage: Use the table and column names as needed when querying the database.
*/
/*
  connect.js Cheat Sheet:

  1. Import 'pg' module to access the PostgreSQL library.
  2. Import 'dotenv' module to load environment variables from the .env file.
  3. Create a new 'Pool' instance with the database connection string and SSL options.
  4. Export the 'pool' instance for use in other modules.

  Usage: Import the 'pool' instance in other modules to query the database.
*/
/*
VirtueMaster Directory Structure:

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