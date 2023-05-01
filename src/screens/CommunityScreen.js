// Task 8: Create community features for users to share experiences and reflections
// 1. Design a user-friendly layout for the community section, including navigation to access different community features.
// 2. Implement a feature to create, read, update, and delete user-generated content such as posts, comments, and reflections.
// 3. Integrate real-time updates for users to see the latest content.
// 4. Add emoticons or reactions system for users to interact with shared content.
// 5. Ensure that the community features are accessible and performant for all users, including those using assistive technologies.
// 6. Implement privacy controls to allow users to share content selectively with others.
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
