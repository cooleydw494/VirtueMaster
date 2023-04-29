-- Create "provider" type, an enum for Firebase auth providers.
CREATE TYPE provider AS ENUM ('google', 'apple', 'email_password');

-- Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firebase_uid VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  display_name VARCHAR(255) NOT NULL,
  provider provider NOT NULL,
  profile_picture_url VARCHAR(255) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Thirteen Virtues
CREATE TABLE virtues (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  short_description VARCHAR(255) NOT NULL,
  icon_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User Virtues
CREATE TABLE user_virtues (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  virtue_id INT NOT NULL,
  current_streak INT NOT NULL DEFAULT 0,
  longest_streak INT NOT NULL DEFAULT 0,
  total_days INT NOT NULL DEFAULT 0,
  total_successes INT NOT NULL DEFAULT 0,
  total_failures INT NOT NULL DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (virtue_id) REFERENCES virtues(id),
  UNIQUE(user_id, virtue_id)
);

-- Daily Virtue Entries
CREATE TYPE entry_status AS ENUM ('success', 'failure', 'neutral');

CREATE TABLE daily_virtue_entries (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  virtue_id INT NOT NULL,
  entry_date DATE NOT NULL,
  status entry_status NOT NULL,
  notes TEXT,
  rating INT DEFAULT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (virtue_id) REFERENCES virtues(id),
  UNIQUE(user_id, virtue_id, entry_date)
);

-- Milestone Definitions
CREATE TABLE milestone_definitions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  progress_requirement INT NOT NULL,
  icon_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Milestones
CREATE TABLE milestones (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  milestone_definition_id INT NOT NULL,
  achieved_date DATE NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (milestone_definition_id) REFERENCES milestone_definitions(id)
);

-- User Milestones
CREATE TABLE user_milestones (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  milestone_id INT NOT NULL,
  notes TEXT,
  rating INT DEFAULT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (milestone_id) REFERENCES milestones(id)
);

-- Goals
CREATE TYPE goal_status AS ENUM ('not_started', 'in_progress', 'completed', 'failed');

CREATE TABLE goals (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  target_date DATE,
  status goal_status NOT NULL DEFAULT 'not_started',
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Notifications
CREATE TABLE notifications (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Weekly Focus Virtues
CREATE TABLE weekly_focus_virtues (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  virtue_id INT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (virtue_id) REFERENCES virtues(id),
  UNIQUE(user_id, start_date, end_date)
);

-- Focus Virtue Entries
CREATE TABLE focus_virtue_entries (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  weekly_focus_virtue_id INT NOT NULL,
  entry_date DATE NOT NULL,
  status entry_status NOT NULL,
  notes TEXT,
  rating INT DEFAULT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (weekly_focus_virtue_id) REFERENCES weekly_focus_virtues(id),
  UNIQUE(user_id, weekly_focus_virtue_id, entry_date)
);

/* CodeMonkey Comments:

- This SQL script creates the base tables required for the VirtueMaster PostgreSQL database.
- Tables include users, virtues, user_virtues, daily_virtue_entries, milestone_definitions, milestones, user_milestones, goals, notifications, weekly_focus_virtues, and focus_virtue_entries.
- Each table is created to store specific data related to the functioning of the VirtueMaster app.
*/