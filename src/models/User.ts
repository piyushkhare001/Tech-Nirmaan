import mongoose, { Document, Schema } from "mongoose";

// Define the interface for a User document
export interface UserDocument extends Document {
  googleId: string;
  name: string;
  email: string;
  profilePic?: string;
}
// Define the Mongoose schema
const UserSchema: Schema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePic: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Export the model with the interface
export default mongoose.models.User || mongoose.model<UserDocument>("User", UserSchema);
