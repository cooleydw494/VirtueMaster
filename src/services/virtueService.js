import pool from '../database/connect';

export const fetchVirtues = async () => {
  const result = await pool.query('SELECT * FROM virtues');
  return result.rows;
};