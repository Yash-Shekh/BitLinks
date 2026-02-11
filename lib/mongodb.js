import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In dev mode, use a global variable so we don't create multiple connections
  if (!global.mongoClientPromise) {
    client = new MongoClient(uri);
    global.mongoClientPromise = client.connect();
  }
  clientPromise = global.mongoClientPromise;
} else {
  // In production, it's fine to create a new client
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;