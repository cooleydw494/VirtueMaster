const pointsEarned = (activityType) => {
  switch (activityType) {
    case 'check_daily_virtue':
      return 5;
    case 'complete_reflection':
      return 10;
    case 'reach_weekly_goal':
      return 50;
    default:
      return 0;
  }
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
