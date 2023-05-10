const activities = {
  check_daily_virtue: { points: 5 },
  complete_reflection: { points: 10 },
  reach_weekly_goal: { points: 50 },
  // other activities here...
};

/**
 * Calculates the points earned for a given activity type.
 * @param {string} activity_type - The type of activity to calculate points for.
 * @returns {number} The number of points earned for the activity.
 */
const points_earned = (activity_type) => {
  return activities[activity_type]?.points || 0;
};

/**
 * Updates the points based on the activity type.
 * @param {Object} params - The parameters for updating points.
 * @param {number} params.points - The current points.
 * @param {string} params.activity_type - The type of activity to update points for.
 * @returns {number} The updated points.
 */
const update_points = ({ points, activity_type }) => {
  const earned_points = points_earned(activity_type);
  return points + earned_points;
};

export { points_earned, update_points };