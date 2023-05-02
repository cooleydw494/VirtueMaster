const activities = {
  check_daily_virtue: { points: 5 },
  complete_reflection: { points: 10 },
  reach_weekly_goal: { points: 50 },
  // other activities here...
};

const pointsEarned = (activityType) => {
  return activities[activityType]?.points || 0;
};

const updatePoints = ({ points, activityType }) => {
  const earnedPoints = pointsEarned(activityType);
  return points + earnedPoints;
};

export { pointsEarned, updatePoints };


// Task 7: Add gamification features through points and rewards system
// 1. Modify the existing points and rewards system to be more engaging, dynamic, and responsive to user actions.
// 2. Consider introducing badges or achievements that users can earn based on their progress or milestones completed.
// 3. Create a leveling system tied to the user's points accumulation, with each level providing increased rewards or recognition.
// 4. Utilize subtle visual or audio feedback to indicate earning points or rewards, adding to the overall user experience.
// 5. Implement a progress dashboard or summary for the user, displaying their total points, level, and achievements.
// 6. Allow users to compare their progress and achievements with friends, further engaging them and fostering healthy competition.
// 7. Iterate on the system to optimize user engagement and maintain their motivation to continue participating in the app.

/* CodeMonkey Comments:

- pointsSystem.js is a module that calculates points earned and updates the points.
- There are several hardcoded activities with their corresponding points value.
- The module exports two main functions: 'pointsEarned' returns earned points based on activity and 'updatePoints' updates user's points based on activity.

Recommendations for improvements:

1. Expand the number and types of activities that can earn points to engage users.
2. Implement a more configurable and dynamic points system.
3. Consider refactoring hardcoded values into a separate configuration file or into the database for easier management.
*/

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
       - Button.js, Card.js, Header.js, Input.js, Text.js, TouchableOpacity.js
     - screens: App screens
       - Home.js, Login.js, Register.js, SplashScreen.js, VirtueDetails.js, VirtueList.js, WeeklyFocus.js
     - styles: App styles
       - globalStyles.js: Base styles
     - utils: App utilities
       - connect.js: Connect to DB
       - pointsSystem.js: Points & rewards system
*/