const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;


/* CodeMonkey Comments:

- connect.js sets up the connection to the PostgreSQL database for the VirtueMaster app.
- The Pool class from the 'pg' library is used to create a new connection pool.
- The DATABASE_URL environment variable stores the PostgreSQL connection string.
- SSL is enabled with 'rejectUnauthorized' set to false to allow connections to self-signed certificate hosts.
*/

// Task 23: Implement a backup and sync feature for data access across multiple devices
// 1. Enable Firebase Realtime Database or Cloud Firestore to store user data and synchronize it across devices.
// 2. Implement a data synchronization mechanism for user data entered on different devices.
// 3. Ensure that the data backup and sync feature works as expected, both online and offline.
// 4. Handle potential conflicts and edge cases in the data synchronization process.

// Task 10: Ensure secure handling of Firebase credentials and improve app security
// 1. Avoid hardcoding Firebase credentials in the source code. Use environment variables or a secure secrets management solution.
// 2. Configure Firebase rules to limit access to authorized users and specific data.
// 3. Add authentication and authorization to protect sensitive user data.
// 4. Keep Firebase packages up to date to ensure you have the latest security patches and improvements.

// Task 10: Ensure secure handling of Firebase credentials and improve app security
// To improve security and protect user data:
// 1. Store Firebase credentials securely using environment variables, and avoid hardcoding them in the codebase.
// 2. Use Firestore security rules to define access rules (read/write) for different user roles.
// 3. Use Firebase Authentication to authenticate users before granting access to app resources.
// 4. Monitor and restrict API requests to a realistic limit, protecting the backend from potential attacks.
// 5. Regularly update dependencies and libraries, patching known security vulnerabilities.
// Apply security best practices throughout the app to ensure a secure user experience.