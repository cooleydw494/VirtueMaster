import { Notifee } from '@notifee/react-native';

const CHANNEL_ID = 'daily-reminder';

// Creates a notification channel for daily reminders
export async function createChannel() {
  try {
    await Notifee.createChannel({
      id: CHANNEL_ID,
      name: 'Daily Reminder',
      lights: false,
      vibration: true,
    });
  } catch (error) {
    console.error('Error creating channel:', error);
  }
}

// Schedules a daily reminder notification at the specified time
export async function scheduleDailyReminder(time) {
  try {
    await createChannel();

    const trigger = { type: Notifee.Trigger.Type.TIME_INTERVAL, interval: 86400, repeat: true, time: time };
    await Notifee.createTriggerNotification(
      {
        id: 'daily-reminder-notification',
        title: 'Track your progress',
        body: "Don't forget to track your progress today.",
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
  } catch (error) {
    console.error('Error scheduling daily reminder:', error);
  }
}

// Cancels the scheduled daily reminder notification
export async function cancelScheduledNotification() {
  try {
    await Notifee.cancelNotification('daily-reminder-notification');
  } catch (error) {
    console.error('Error canceling scheduled notification:', error);
  }
}