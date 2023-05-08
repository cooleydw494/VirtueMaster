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
