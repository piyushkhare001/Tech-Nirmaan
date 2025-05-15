/* eslint-disable @typescript-eslint/no-namespace */
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: MongooseCache | undefined;
    }
  }
}

const cached: MongooseCache = (global as typeof globalThis & { mongoose?: MongooseCache }).mongoose ?? { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4, // Use IPv4 instead of IPv6
    };

    cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => {
      console.log('Connected to MongoDB');
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  (global as typeof globalThis & { mongoose?: MongooseCache }).mongoose = cached;

  return cached.conn;
}

export default dbConnect;