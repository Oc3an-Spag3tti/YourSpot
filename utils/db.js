import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient && cachedClient.isConnected()) {
    return { client: cachedClient, db: cachedClient.db(dbName) };
  }

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    cachedClient = client;
    return { client, db: client.db(dbName) };
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw new Error('Database connection error');
  }
}
