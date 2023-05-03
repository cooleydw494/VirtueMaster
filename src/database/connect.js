import { Pool } from 'pg';
import { firebaseApp } from "../../App";
import { getFirestore } from 'firebase/firestore';
import 'dotenv/config';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
const firestore = getFirestore(firebaseApp);
export { pool, firestore };

export async function getUser(firebase_uid) {
  const { rows } = await pool.query('SELECT * FROM users WHERE firebase_uid = $1', [firebase_uid]);
  return rows[0];
}

export async function createUser(userData) {
  const { firebase_uid, email, display_name, provider, profile_picture_url, points, rewards, created_at, updated_at } = userData;
  const { rows } = await pool.query(
      `INSERT INTO users (firebase_uid, email, display_name, provider, profile_picture_url, points, rewards, created_at, updated_at) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [firebase_uid, email, display_name, provider, profile_picture_url, points, rewards, created_at, updated_at]
  );
  return rows[0];
}

export async function updateUser(firebase_uid, updates) {
  const updateKeys = Object.keys(updates);
  const updateValues = Object.values(updates);
  const updateSet = updateKeys.map((key, index) => `${key} = $${index + 2}`).join(', ');

  const { rows } = await pool.query(
      `UPDATE users SET ${updateSet} WHERE firebase_uid = $1 RETURNING *`,
      [firebase_uid, ...updateValues]
  );
  return rows[0];
}

export async function getAllVirtues() {
  const { rows } = await pool.query('SELECT * FROM virtues');
  return rows;
}

export async function getVirtue(virtueId) {
  const { rows } = await pool.query('SELECT * FROM virtues WHERE id = $1', [virtueId]);
  return rows[0];
}

export async function getUserVirtue(firebase_uid, virtueId) {
  const { rows } = await pool.query(
      'SELECT * FROM user_virtues WHERE user_id = $1 AND virtue_id = $2',
      [firebase_uid, virtueId]
  );
  return rows[0];
}

export async function updateUserVirtue(firebase_uid, virtueId, updates) {
  const updateKeys = Object.keys(updates);
  const updateValues = Object.values(updates);
  const updateSet = updateKeys.map((key, index) => `${key} = $${index + 3}`).join(', ');

  const { rows } = await pool.query(
      `UPDATE user_virtues SET ${updateSet} WHERE user_id = $1 AND virtue_id = $2 RETURNING *`,
      [firebase_uid, virtueId, ...updateValues]
  );
  return rows[0];
}

export async function getDailyVirtueEntries(firebase_uid, virtueId) {
  const { rows } = await pool.query(
      'SELECT user_id, virtue_id, entry_date, status, notes, rating FROM daily_virtue_entries WHERE user_id = $1 AND virtue_id = $2',
      [firebase_uid, virtueId]
  );
  return rows;
}

export async function createDailyVirtueEntry(entryData) {
  const { user_id, virtue_id, entry_date, status, notes, rating } = entryData;
  const { rows } = await pool.query(
      `INSERT INTO daily_virtue_entries (user_id, virtue_id, entry_date, status, notes, rating) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [user_id, virtue_id, entry_date, status, notes, rating]
);
  return rows[0];
}

export async function updateDailyVirtueEntry(firebase_uid, virtueId, date, updates) {
  const updateKeys = Object.keys(updates);
  const updateValues = Object.values(updates);
  const updateSet = updateKeys.map((key, index) => `${key} = $${index + 4}`).join(', ');

  const { rows } = await pool.query(
      'UPDATE daily_virtue_entries SET ${updateSet} WHERE user_id = $1 AND virtue_id = $2 AND entry_date = $3 RETURNING *',
      [firebase_uid, virtueId, date, ...updateValues]
);
  return rows[0];
}

export async function getAllMilestoneDefinitions() {
  const { rows } = await pool.query('SELECT * FROM milestone_definitions');
  return rows;
}

export async function getMilestoneDefinition(milestoneId) {
  const { rows } = await pool.query('SELECT * FROM milestone_definitions WHERE id = $1', [milestoneId]);
  return rows[0];
}

export async function getMilestone(firebase_uid, milestoneId) {
  const { rows } = await pool.query(
      'SELECT * FROM milestones WHERE user_id = $1 AND milestone_definition_id = $2',
      [firebase_uid, milestoneId]
  );
  return rows[0];
}

export async function createMilestone(firebase_uid, milestoneData) {
  const { milestone_definition_id, achieved_date } = milestoneData;
  const { rows } = await pool.query(
      `INSERT INTO milestones (user_id, milestone_definition_id, achieved_date) VALUES ($1, $2, $3) RETURNING *`,
      [firebase_uid, milestone_definition_id, achieved_date]
  );
  return rows[0];
}

export async function getUserMilestone(firebase_uid, milestoneId) {
  const { rows } = await pool.query(
      'SELECT * FROM user_milestones WHERE user_id = $1 AND milestone_id = $2',
      [firebase_uid, milestoneId]
  );
  return rows[0];
}

export async function createUserMilestone(firebase_uid, milestoneId, notes, rating) {
  const { rows } = await pool.query(
      'INSERT INTO user_milestones (user_id, milestone_id, notes, rating) VALUES ($1, $2, $3, $4) RETURNING *',
      [firebase_uid, milestoneId, notes, rating]
  );
  return rows[0];
}

export async function updateUserMilestone(firebase_uid, milestoneId, updates) {
  const updateKeys = Object.keys(updates);
  const updateValues = Object.values(updates);
  const updateSet = updateKeys.map((key, index) => `${key} = $${index + 3}`).join(', ');

  const { rows } = await pool.query(
      `UPDATE user_milestones SET ${updateSet} WHERE user_id = $1 AND milestone_id = $2 RETURNING *`,
[firebase_uid, milestoneId, ...updateValues]
);
return rows[0];
}

export async function getUserGoals(firebase_uid) {
  const { rows } = await pool.query('SELECT * FROM goals WHERE user_id = $1', [firebase_uid]);
  return rows;
}

export async function createGoal(firebase_uid, goalData) {
const { title, description, target_date, status } = goalData;
const { rows } = await pool.query(
`INSERT INTO goals (user_id, title, description, target_date, status) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
[firebase_uid, title, description, target_date, status]
);
return rows[0];
}

export async function updateGoal(firebase_uid, goalId, updates) {
const updateKeys = Object.keys(updates);
const updateValues = Object.values(updates);
const updateSet = updateKeys.map((key, index) => `${key} = $${index + 4}`).join(', ');

const { rows } = await pool.query(
`UPDATE goals SET ${updateSet} WHERE user_id = $1 AND id = $2 RETURNING *`,
[firebase_uid, goalId, ...updateValues]
);
return rows[0];
}

export async function getUserNotifications(firebase_uid) {
const { rows } = await pool.query('SELECT * FROM notifications WHERE user_id = $1', [firebase_uid]);
return rows;
}

export async function createNotification(firebase_uid, notificationData) {
const { title, message, is_read, created_at, updated_at } = notificationData;
const { rows } = await pool.query(
`INSERT INTO notifications (user_id, title, message, is_read, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
[firebase_uid, title, message, is_read, created_at, updated_at]
);
return rows[0];
}

export async function updateNotification(firebase_uid, notificationId, updates) {
const updateKeys = Object.keys(updates);
const updateValues = Object.values(updates);
const updateSet = updateKeys.map((key, index) => `${key} = $${index + 4}`).join(', ');

const { rows } = await pool.query(
`UPDATE notifications SET ${updateSet} WHERE user_id = $1 AND id = $2 RETURNING *`,
[firebase_uid, notificationId, ...updateValues]
);
return rows[0];
}

export async function getWeeklyFocusVirtue(firebase_uid, startDate, endDate) {
  const { rows } = await pool.query(
      'SELECT * FROM weekly_focus_virtues WHERE user_id = $1 AND start_date = $2 AND end_date = $3',
      [firebase_uid, startDate, endDate]
  );
  return rows[0];
}

export async function createWeeklyFocusVirtue(firebase_uid, virtueId, startDate, endDate) {
const { rows } = await pool.query(
`INSERT INTO weekly_focus_virtues (user_id, virtue_id, start_date, end_date) VALUES ($1, $2, $3, $4) RETURNING *`,
[firebase_uid, virtueId, startDate, endDate]
);
return rows[0];
}

export async function getFocusVirtueEntry(firebase_uid, focusVirtueId, date) {
  const { rows } = await pool.query(
      'SELECT * FROM focus_virtue_entries WHERE user_id = $1 AND focus_virtue_id = $2 AND entry_date = $3',
      [firebase_uid, focusVirtueId, date]
  );
  return rows[0];
}

export async function createFocusVirtueEntry(entryData) {
  const { user_id, focus_virtue_id, entry_date, status, notes, rating } = entryData;
  const { rows } = await pool.query(
      `INSERT INTO focus_virtue_entries (user_id, focus_virtue_id, entry_date, status, notes, rating) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [user_id, focus_virtue_id, entry_date, status, notes, rating]
);
  return rows[0];
}

export async function updateFocusVirtueEntry(firebase_uid, focusVirtueId, date, updates) {
  const updateKeys = Object.keys(updates);
  const updateValues = Object.values(updates);
  const updateSet = updateKeys.map((key, index) => `${key} = $${index + 4}`).join(', ');

  const { rows } = await pool.query(
      `UPDATE focus_virtue_entries SET ${updateSet} WHERE user_id = $1 AND focus_virtue_id = $2 AND entry_date = $3 RETURNING *`,
      [firebase_uid, focusVirtueId, date, ...updateValues]
);
  return rows[0];
}

export async function getUserPointsLog(firebase_uid) {
  const { rows } = await pool.query('SELECT * FROM points_log WHERE user_id = $1', [firebase_uid]);
  return rows;
}

export async function createPointsLog(firebase_uid, pointsData) {
  const { points, description, created_at } = pointsData;
  const { rows } = await pool.query(
      `INSERT INTO points_log (user_id, points, description, created_at) VALUES ($1, $2, $3, $4) RETURNING *`,
      [firebase_uid, points, description, created_at]
  );
  return rows[0];
}

export async function getUserRewardsLog(firebase_uid) {
  const { rows } = await pool.query('SELECT * FROM rewards_log WHERE user_id = $1', [firebase_uid]);
  return rows;
}

export async function createRewardsLog(firebase_uid, rewardsData) {
  const { rewards, description, created_at } = rewardsData;
  const { rows } = await pool.query(
      `INSERT INTO rewards_log (user_id, rewards, description, created_at) VALUES ($1, $2, $3, $4) RETURNING *`,
      [firebase_uid, rewards, description, created_at]
  );
  return rows[0];
}
