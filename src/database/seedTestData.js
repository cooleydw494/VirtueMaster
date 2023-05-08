const fs = require('fs');
const path = require('path');
const pool = require('./connect');

const seedTestDataSql = fs.readFileSync(
  path.resolve(__dirname, 'seedTestData.sql'),
  'utf-8'
);

pool.query(seedTestDataSql, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Test data seeded successfully.');
  pool.end();
});
