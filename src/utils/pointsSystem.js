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
