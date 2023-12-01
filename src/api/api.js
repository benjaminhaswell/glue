
import { MongoClient } from 'mongodb';
import myKey from './key.js';


const uri = "mongodb+srv://benhaswell:" + myKey + "@apps.90xed2d.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Returns an array of all apps in glue apps collection
async function getAllApps() {

  try {

    // Connect to client
    await client.connect();

    // Connect to database collection
    const database = client.db('glue');
    const collection = database.collection('apps');

    // Find all documents in the "apps" collection
    const cursor = collection.find({});

    // Convert cursor to array
    const results = await cursor.toArray();

    // Return array
    return results;

  } catch (error) {
    console.error('Error in getAllApps:', error.message);
    throw error; // Re-throw the error for higher-level error handling
  } finally {
    await client.close();
  }
}

// Verify credentials
async function verifyLogin(username, password) {
  try {

    // Connect to client
    await client.connect();

    // Connect to database collection
    const database = client.db('glue');
    const collection = database.collection('users');

    // Find a user with the provided username and password
    const user = await collection.findOne({ username, password });

    // If a user is found, return true; otherwise, return false
    return !!user;
  } catch (error) {
    console.error('Error in verifyLogin:', error.message);
    throw error; // Re-throw the error for higher-level error handling
  } finally {
    await client.close();
  }
}

// Register account in database
async function registerAccount(username, password) {
  try {

    // Connect to client
    await client.connect();

    // Connect to database collection
    const database = client.db('glue');
    const collection = database.collection('users');

    const user = {
      username: username,
      password: password,
      moderator: false,
      admin: false
    }

    // Make sure user doesn't already exist
    const exists = await collection.findOne({ username });
    if (exists) {
      return false;
    }

    // Find a user with the provided username and password
    const result = await collection.insertOne(user);

    console.log("User successfully inserted with id: " + result.insertedId);

    return true;

  } catch (error) {
    console.error('Error in verifyLogin:', error.message);
    throw error; // Re-throw the error for higher-level error handling
  } finally {
    await client.close();
  }
}


// For debugging purposes:
// const data = await getAllApps().catch(console.dir);
// console.log(data);

export { getAllApps, verifyLogin, registerAccount };