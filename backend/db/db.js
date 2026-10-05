import { MongoClient } from "mongodb";
import "dotenv/config";

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/";

const client = new MongoClient(MONGO_URL);

try {
    await client.connect();
} catch (error) {
    console.error(error);
    process.exit(1);
}
export const db = client.db("tzofia_eye");

