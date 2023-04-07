-- Users
INSERT INTO users (firebase_uid, email, display_name, provider, profile_picture_url)
VALUES
  ('firebase_uid_1', 'john.doe@example.com', 'John Doe', 'email_password', 'https://example.com/profile_pictures/john_doe.jpg'),
  ('firebase_uid_2', 'jane.doe@example.com', 'Jane Doe', 'google', 'https://example.com/profile_pictures/jane_doe.jpg'),
  ('firebase_uid_3', 'alice.smith@example.com', 'Alice Smith', 'apple', 'https://example.com/profile_pictures/alice_smith.jpg'),
  ('firebase_uid_4', 'bob.johnson@example.com', 'Bob Johnson', 'google', 'https://example.com/profile_pictures/bob_johnson.jpg');

-- Thirteen Virtues
INSERT INTO virtues (name, description, short_description, icon_name)
VALUES
  ('Temperance', 'Eat not to dullness; drink not to elevation.', 'Moderation in food and drink', 'temperance'),
  ('Silence', 'Speak not but what may benefit others or yourself; avoid trifling conversation.', 'Useful and meaningful speech', 'silence'),
  ('Order', 'Let all your things have their places; let each part of your business have its time.', 'Organize and prioritize', 'order'),
  ('Resolution', 'Resolve to perform what you ought; perform without fail what you resolve.', 'Determination and commitment', 'resolution'),
  ('Frugality', 'Make no expense but to do good to others or yourself; i.e., waste nothing.', 'Economize and avoid waste', 'frugality'),
  ('Industry', 'Lose no time; be always employed in something useful; cut off all unnecessary actions.', 'Hard work and productivity', 'industry'),
  ('Sincerity', 'Use no hurtful deceit; think innocently and justly, and, if you speak, speak accordingly.', 'Honesty and truthfulness', 'sincerity'),
  ('Justice', 'Wrong none by doing injuries, or omitting the benefits that are your duty.', 'Fairness and morality', 'justice'),
  ('Moderation', 'Avoid extremes; forbear resenting injuries so much as you think they deserve.', 'Self-control and restraint', 'moderation'),
  ('Cleanliness', 'Tolerate no uncleanliness in body, clothes, or habitation.', 'Hygiene and neatness', 'cleanliness'),
  ('Tranquility', 'Be not disturbed at trifles, or at accidents common or unavoidable.', 'Peacefulness and calmness', 'tranquility'),
  ('Chastity', 'Rarely use venery but for health or offspring, never to dullness, weakness, or the injury of your own or another''s peace or reputation.', 'Purity and self-discipline', 'chastity'),
  ('Humility', 'Imitate Jesus and Socrates.', 'Modesty and selflessness', 'humility');

-- User Virtues (all users have a relationship with every virtue)
INSERT INTO user_virtues (user_id, virtue_id)
VALUES
  (1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7), (1, 8), (1, 9), (1,   10), (1, 11), (1, 12), (1, 13),
  (2, 1), (2, 2), (2, 3), (2, 4), (2, 5), (2, 6), (2, 7), (2, 8), (2, 9), (2, 10), (2, 11), (2, 12), (2, 13),
  (3, 1), (3, 2), (3, 3), (3, 4), (3, 5), (3, 6), (3, 7), (3, 8), (3, 9), (3, 10), (3, 11), (3, 12), (3, 13),
  (4, 1), (4, 2), (4, 3), (4, 4), (4, 5), (4, 6), (4, 7), (4, 8), (4, 9), (4, 10), (4, 11), (4, 12), (4, 13);

-- Weekly Focus Virtues
INSERT INTO weekly_focus_virtues (user_id, virtue_id, start_date, end_date)
VALUES
  (1, 4, '2023-03-26', '2023-04-01'),
  (2, 6, '2023-03-26', '2023-04-01'),
  (3, 1, '2023-03-26', '2023-04-01'),
  (4, 9, '2023-03-26', '2023-04-01');

-- Daily Virtue Entries
-- John Doe
INSERT INTO daily_virtue_entries (user_id, virtue_id, entry_date, status, notes)
VALUES
  (1, 1, '2023-03-26', 'success', 'Ate in moderation and avoided overeating.'),
  (1, 2, '2023-03-26', 'success', 'Listened more than talked in conversations.'),
  (1, 3, '2023-03-26', 'success', 'Organized my work area and set daily priorities.'),
  (1, 4, '2023-03-26', 'success', 'Completed all tasks on my to-do list.'),
  (1, 5, '2023-03-26', 'success', 'Saved money by cooking dinner at home.'),
  (1, 6, '2023-03-26', 'success', 'Finished work tasks efficiently without distractions.'),
  (1, 7, '2023-03-26', 'success', 'Was honest with my partner about my feelings.'),
  (1, 8, '2023-03-26', 'success', 'Apologized for a mistake and made amends.'),
  (1, 9, '2023-03-26', 'success', 'Stayed calm when someone criticized me unfairly.'),
  (1, 10, '2023-03-26', 'success', 'Kept my living space clean and organized.'),
  (1, 11, '2023-03-26', 'success', 'Avoided getting upset over small inconveniences.'),
  (1, 12, '2023-03-26', 'success', 'Focused on personal growth and self-discipline.'),
  (1, 13, '2023-03-26', 'success', 'Showed humility by listening to others and admitting when I was wrong.');

-- Jane Doe
INSERT INTO daily_virtue_entries (user_id, virtue_id, entry_date, status, notes)
VALUES
  (2, 1, '2023-03-26', 'success', 'Avoided overeating and had water instead of soda.'),
  (2, 2, '2023-03-26', 'success', 'Spoke kindly and thoughtfully to others.'),
  (2, 3, '2023-03-26', 'success', 'Created a daily schedule and stuck to it.'),
  (2, 4, '2023-03-26', 'success', 'Completed a project at work ahead of the deadline.'),
  (2, 5, '2023-03-26', 'success', 'Used coupons to save on groceries.'),
  (2, 6, '2023-03-26', 'success', 'Stayed focused and productive throughout the day.'),
  (2, 7, '2023-03-26', 'success', 'Gave honest and constructive feedback to a coworker.'),
  (2, 8, '2023-03-26', 'success', 'Treated everyone fairly and with respect.'),
  (2, 9, '2023-03-26', 'success', 'Kept emotions in check during a difficult conversation.'),
  (2, 10, '2023-03-26', 'success', 'Cleaned the house and did laundry.'),
  (2, 11, '2023-03-26', 'success', 'Stayed calm when my car had a flat tire.'),
  (2, 12, '2023-03-26', 'success', 'Practiced self-discipline and self-care.'),
  (2, 13, '2023-03-26', 'success', 'Asked for help when needed and listened to advice.');

-- Alice Smith
INSERT INTO daily_virtue_entries (user_id, virtue_id, entry_date, status, notes)
VALUES
  (3, 1, '2023-03-26', 'success', 'Had a balanced diet and drank water regularly.'),
  (3, 2, '2023-03-26', 'success', 'Chose words carefully and focused on positive communication.'),
  (3, 3, '2023-03-26', 'success', 'Organized my workspace and managed my time effectively.'),
  (3, 4, '2023-03-26', 'success', 'Set realistic goals and achieved them.'),
  (3, 5, '2023-03-26', 'success', 'Made a budget and stuck to it.'),
  (3, 6, '2023-03-26', 'success', 'Accomplished tasks efficiently without procrastination.'),
  (3, 7, '2023-03-26', 'success', 'Spoke truthfully and with kindness.'),
  (3, 8, '2023-03-26', 'success', 'Helped a neighbor in need without expecting anything in return.'),
  (3, 9, '2023-03-26', 'success', 'Handled a disagreement with patience and understanding.'),
  (3, 10, '2023-03-26', 'success', 'Maintained a clean and tidy home.'),
  (3, 11, '2023-03-26', 'success', 'Accepted and let go of things beyond my control.'),
  (3, 12, '2023-03-  26', 'success', 'Prioritized personal development and self-improvement.'),
  (3, 13, '2023-03-26', 'success', 'Learned from my mistakes and showed humility.');

-- Bob Johnson
INSERT INTO daily_virtue_entries (user_id, virtue_id, entry_date, status, notes)
VALUES
  (4, 1, '2023-03-26', 'success', 'Enjoyed healthy meals and portion control.'),
  (4, 2, '2023-03-26', 'success', 'Actively listened and empathized with others.'),
  (4, 3, '2023-03-26', 'success', 'Set daily goals and followed through with them.'),
  (4, 4, '2023-03-26', 'success', 'Finished a personal project on time.'),
  (4, 5, '2023-03-26', 'success', 'Comparison shopped to find the best deals.'),
  (4, 6, '2023-03-26', 'success', 'Worked diligently and completed tasks on time.'),
  (4, 7, '2023-03-26', 'success', 'Shared honest feedback with a friend.'),
  (4, 8, '2023-03-26', 'success', 'Volunteered my time to help a local organization.'),
  (4, 9, '2023-03-26', 'success', 'Managed stress and emotions in a healthy way.'),
  (4, 10, '2023-03-26', 'success', 'Kept a clean and organized living environment.'),
  (4, 11, '2023-03-26', 'success', 'Handled unexpected challenges with grace.'),
  (4, 12, '2023-03-26', 'success', 'Committed to self-improvement and growth.'),
  (4, 13, '2023-03-26', 'success', 'Accepted responsibility and learned from failure.');

-- Continue entering daily virtue entries for each user for 3-7 days, following the same pattern.

-- Milestone Definitions
INSERT INTO milestone_definitions (name, description, progress_requirement, icon_name)
VALUES
  ('Beginner', 'Complete 30 successful virtue days.', 30, 'beginner'),
  ('Intermediate', 'Complete 100 successful virtue days.', 100, 'intermediate'),
  ('Advanced', 'Complete 365 successful virtue days.', 365, 'advanced'),
  ('Master', 'Complete 1000 successful virtue days.', 1000, 'master');

-- Assign milestones to users based on their progress in daily_virtue_entries.

-- Goals
INSERT INTO goals (user_id, title, description, target_date, status)
VALUES
  (1, 'Save $1000', 'Save $1000 for an emergency fund.', '2023-06-30', 'in_progress'),
  (2, 'Read 12 books', 'Read 12 books in various genres this year.', '2023-12-31', 'in_progress'),
  (3, 'Run a 5K', 'Train and run a 5K race.', '2023-09-01', 'not_started'),
  (4, 'Learn to play guitar', 'Take guitar lessons and practice regularly.', '2023-12-31', 'in_progress');

-- Notifications
INSERT INTO notifications (user_id, title, message)
VALUES
  (1, 'Milestone achieved', 'Congratulations! You have achieved the Beginner milestone.'),
  (2, 'Goal progress', 'You are halfway to   completing your goal of reading 12 books this year.'),
  (3, 'New weekly focus virtue', 'Your new weekly focus virtue is Justice.'),
  (4, 'Daily reminder', 'Don't forget to log your daily virtue entries today.');

-- Weekly Focus Virtues
INSERT INTO weekly_focus_virtues (user_id, virtue_id, start_date, end_date)
VALUES
  (1, 1, '2023-03-26', '2023-04-01'),
  (2, 2, '2023-03-26', '2023-04-01'),
  (3, 3, '2023-03-26', '2023-04-01'),
  (4, 4, '2023-03-26', '2023-04-01');

-- Focus Virtue Entries
INSERT INTO focus_virtue_entries (user_id, weekly_focus_virtue_id, entry_date, status, notes)
VALUES
  (1, 1, '2023-03-26', 'success', 'Focused on eating healthy meals and avoided snacks.'),
  (2, 2, '2023-03-26', 'success', 'Communicated effectively and with empathy.'),
  (3, 3, '2023-03-26', 'success', 'Planned my day and managed my time wisely.'),
  (4, 4, '2023-03-26', 'success', 'Worked on my personal project and made progress.');

-- More Focus Virtue Entries
INSERT INTO focus_virtue_entries (user_id, weekly_focus_virtue_id, entry_date, status, notes)
VALUES
  (1, 1, '2023-03-27', 'success', 'Prepared a healthy lunch and resisted junk food.'),
  (2, 2, '2023-03-27', 'success', 'Actively listened to a friend and supported them.'),
  (3, 3, '2023-03-27', 'success', 'Completed tasks on time and prioritized well.'),
  (4, 4, '2023-03-27', 'failure', 'Got distracted and didn't make progress on my project.');

INSERT INTO focus_virtue_entries (user_id, weekly_focus_virtue_id, entry_date, status, notes)
VALUES
  (1, 1, '2023-03-28', 'failure', 'Ate fast food for lunch and snacked a lot.'),
  (2, 2, '2023-03-28', 'neutral', 'Had limited interactions but remained respectful.'),
  (3, 3, '2023-03-28', 'success', 'Managed work and personal tasks efficiently.'),
  (4, 4, '2023-03-28', 'success', 'Made significant progress on my project.');

INSERT INTO focus_virtue_entries (user_id, weekly_focus_virtue_id, entry_date, status, notes)
VALUES
  (1, 1, '2023-03-29', 'success', 'Cooked a healthy dinner and enjoyed a balanced meal.'),
  (2, 2, '2023-03-29', 'success', 'Resolved a conflict with a coworker amicably.'),
  (3, 3, '2023-03-29', 'success', 'Organized my schedule and stayed on track.'),
  (4, 4, '2023-03-29', 'neutral', 'Focused on other tasks and didn't work on my project.');

INSERT INTO focus_virtue_entries (user_id, weekly_focus_virtue_id, entry_date, status, notes)
VALUES
  (1, 1, '2023-03-30', 'success', 'Ate well-balanced meals and stayed hydrated.'),
  (2, 2, '2023-03-30', 'success', 'Supported a friend through a tough situation.'),
  (3, 3, '2023-03-30', 'success', 'Completed tasks early and used extra time wisely.'),
  (4, 4, '2023-03-30', 'failure', 'Procrastinated and didn't work on my project.');

-- More Focus Virtue Entries
INSERT INTO focus_virtue_entries (user_id, weekly_focus_virtue_id, entry_date, status, notes)
VALUES
  (1, 1, '2023-03-31', 'success', 'Packed a nutritious lunch and avoided unhealthy snacks.'),
  (2, 2, '2023-03-31', 'failure', 'Got into an argument and didn't handle it well.'),
  (3, 3, '2023-03-31', 'success', 'Stayed focused and accomplished all my tasks.'),
  (4, 4, '2023-03-31', 'neutral', 'Couldn't find the motivation to work on my project.');

INSERT INTO focus_virtue_entries (user_id, weekly_focus_virtue_id, entry_date, status, notes)
VALUES
  (1, 1, '2023-04-01', 'success', 'Made healthy choices and exercised.'),
  (2, 2, '2023-04-01', 'neutral', 'Did not have many social interactions today.'),
  (3, 3, '2023-04-01', 'success', 'Used time effectively and met my deadlines.'),
  (4, 4, '2023-04-01', 'success', 'Worked diligently on my project for a few hours.');

INSERT INTO focus_virtue_entries (user_id, weekly_focus_virtue_id, entry_date, status, notes)
VALUES
  (1, 1, '2023-04-02', 'failure', 'Indulged in junk food at a party.'),
  (2, 2, '2023-04-02', 'success', 'Helped a neighbor with a problem and listened attentively.'),
  (3, 3, '2023-04-02', 'neutral', 'Got some tasks done but got distracted occasionally.'),
  (4, 4, '2023-04-02', 'failure', 'Spent time on leisure activities instead of my project.');

-- Milestones achieved
INSERT INTO milestones (user_id, milestone_definition_id, achieved_date)
VALUES
  (1, 1, '2023-03-30'),
  (2, 2, '2023-03-31'),
  (3, 3, '2023-04-01'),
  (4, 4, '2023-04-02');

-- User Milestones
INSERT INTO user_milestones (user_id, milestone_id, notes)
VALUES
  (1, 1, 'Reached my first milestone! Excited to keep improving.'),
  (2, 2, 'Faced some challenges, but happy to achieve this milestone.'),
  (3, 3, 'Consistent effort pays off!'),
  (4, 4, 'Slow progress, but happy to reach this milestone.');

-- Notifications
INSERT INTO notifications (user_id, title, message)
VALUES
  (1, 'Milestone Achieved', 'Congratulations! You reached a new milestone.'),
  (2, 'Milestone Achieved', 'Great job! You achieved a new milestone.'),
  (3, 'Milestone Achieved', 'Keep up the good work! You hit a new milestone.'),
  (4, 'Milestone Achieved', 'Well done! You reached a milestone.');

