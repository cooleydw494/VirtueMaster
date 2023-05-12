import { Constants } from "expo-constants";
import { Notifications } from "expo-notifications";
import { Platform, Alert } from "react-native";

const CHANNEL_ID = "daily-reminder";
const NOTIFICATION_ID = "daily-reminder-notification";

// Set notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// Register for push notifications
export async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      Alert.alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    Alert.alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync(CHANNEL_ID, {
      name: "Daily Reminder",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

// Schedules a daily reminder notification at the specified time
export async function scheduleDailyReminder(time) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Track your progress",
      body: "Don't forget to track your progress today.",
    },
    trigger: {
      hour: time.hour,
      minute: time.minute,
      repeats: true,
    },
  });
}

// Cancels the scheduled daily reminder notification
export async function cancelScheduledNotification() {
  await Notifications.cancelScheduledNotificationAsync(NOTIFICATION_ID);
}