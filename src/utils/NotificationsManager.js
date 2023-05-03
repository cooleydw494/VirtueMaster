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

  const trigger = { type: Notifee.Trigger.Type.TIME_INTERVAL, interval: 86400, repeat: true }; // editor says "unresolved variable Trigger"
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
    { trigger: trigger } // code editor says "argument type is not assignable to parameter type Trigger"
  );
}

export async function cancelScheduledNotification() {
  await Notifee.cancelNotification('daily-reminder-notification');
}

/*
TODO:
- Utilize database
-
 */
/*
  VirtueMaster PostgreSQL Database Usage Guide
  Purpose: Utility module for PostgreSQL/Firestore interactions.
  Exported from database/connect.js:
- pool, firestore
- getUser(uid)
- createUser(data)
- updateUser(uid, updates)
- getAllVirtues()
- getVirtue(id)
- getUserVirtue(uid, vid)
- updateUserVirtue(uid, vid, updates)
- getDailyVirtueEntry(uid, vid, date)
- createDailyVirtueEntry(data)
- updateDailyVirtueEntry(uid, vid, date, updates)
- getAllMilestoneDefinitions()
- getMilestoneDefinition(mid)
- getMilestone(uid, mid)
- createMilestone(uid, data)
- getUserMilestone(uid, mid)

VirtueMaster PostgreSQL Database Schema:
- users: firebase_uid, email, display_name, provider, profile_picture_url, points, rewards, created_at, updated_at
- virtues: id, name, description, short_description, icon_name, created_at, updated_at
- user_virtues: user_id, virtue_id, current_streak, longest_streak, total_days, total_successes, total_failures
- daily_virtue_entries: user_id, virtue_id, entry_date, status, notes, rating
- milestone_definitions: id, name, description, progress_requirement, icon_name, created_at, updated_at
- milestones: user_id, milestone_definition_id, achieved_date
- user_milestones: user_id, milestone_id, notes, rating
- goals: user_id, title, description, target_date, status
- notifications: user_id, title, message, is_read, created_at, updated_at
- weekly_focus_virtues: user_id, virtue_id, start_date, end_date
- focus_virtue_entries: user_id, focus_virtue_id, entry_date, status, notes, rating
- points_log: user_id, points, description, created_at
- rewards_log: user_id, rewards, description, created_at
*/
