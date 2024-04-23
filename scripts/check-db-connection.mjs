
const { connectToDatabase } = require('utils/db.js'); // adjust the path as needed

async function main() {
  try {
    const { client } = await connectToDatabase();
    console.log('Connected to MongoDB successfully!');
    await client.close(); // close the connection
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // exit with an error code
  }
}

main();
