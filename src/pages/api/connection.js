import { connectToDatabase } from '../../utils/db'; // assuming you have a file for database connection utility

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase(); // connect to the database

    if (db) {
      res.status(200).json({ message: 'Database connection exists!' });
    } else {
      res.status(500).json({ message: 'Database connection does not exist' });
    }
  } catch (error) {
    console.error('Error checking database connection:', error);
    res.status(500).json({ message: 'Error checking database connection' });
  }
}
