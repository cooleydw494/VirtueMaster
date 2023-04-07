const fs = require('fs');
const path = require('path');
const pool = require('./connect');

const createBaseTablesSql = fs.readFileSync(
  path.resolve(__dirname, 'createBaseTables.sql'),
  'utf-8'
);

pool.query(createBaseTablesSql, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Base tables created successfully.');
  pool.end();
});
