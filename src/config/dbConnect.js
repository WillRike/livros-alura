import mongoose from "mongoose";
import "dotenv/config";

const URI = process.env.DB_CONNECTION_STRING;

async function connectDatabase() {
  mongoose.connect(URI);

  return mongoose.connection;
}

export default connectDatabase;
