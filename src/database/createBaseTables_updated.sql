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
  points INT NOT NULL DEFAULT 0,
  rewards INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Rest of the schema...

-- Points Log
CREATE TABLE points_log (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  points INT NOT NULL,
  description VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Rewards Log
CREATE TABLE rewards_log (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  rewards INT NOT NULL,
  description VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);