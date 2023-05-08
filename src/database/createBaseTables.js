const fs = require('fs');
const path = require('path');
const pool = require('./connect');

// Read the SQL file to create base tables
const createBaseTablesSql = fs.readFileSync(
  path.resolve(__dirname, 'createBaseTables.sql'),
  'utf-8'
);

// Execute the SQL query to create base tables
pool.query(createBaseTablesSql, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Base tables created successfully.');
  pool.end();
});
