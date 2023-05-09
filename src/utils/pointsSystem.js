const activities = {
  check_daily_virtue: { points: 5 },
  complete_reflection: { points: 10 },
  reach_weekly_goal: { points: 50 },
  // other activities here...
};

/**
 * Calculates the points earned for a given activity type.
 * @param {string} activityType - The type of activity to calculate points for.
 * @returns {number} The number of points earned for the activity.
 */
const pointsEarned = (activityType) => {
  return activities[activityType]?.points || 0;
};

const updatePoints = ({ points, activityType }) => {
  const earnedPoints = pointsEarned(activityType);
  return points + earnedPoints;
};

export { pointsEarned, updatePoints };