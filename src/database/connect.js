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