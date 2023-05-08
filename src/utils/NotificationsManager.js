import Notifee from '@notifee/react-native';

const CHANNEL_ID = 'daily-reminder';

export async function createChannel() {
  await Notifee.createChannel({
    id: CHANNEL_ID,
    name: 'Daily Reminder',
    lights: false,
    vibration: true,
  });
}

export async function scheduleDailyReminder(time) {
  await createChannel();

  const trigger = { type: Notifee.Trigger.Type.TIME_INTERVAL, interval: 86400, repeat: true };
  await Notifee.createTriggerNotification(
    {
      id: `daily-reminder-notification`,
      title: `Track your progress`,
      body: `Don't forget to track your progress today.`,
      android: {
        channelId: CHANNEL_ID,
        smallIcon: 'ic_stat_name',
        largeIcon: 'ic_launcher',
      },
      ios: {
        categoryId: 'DAILY_REMINDER',
      },
    },
    { trigger: trigger }
  );
}

export async function cancelScheduledNotification() {
  await Notifee.cancelNotification('daily-reminder-notification');
}
