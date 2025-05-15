// models/UserSubmission.ts
import  { Schema, models, model } from "mongoose";

const UserSubmissionSchema = new Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: String, required: false },
  transactionId: { type: String, required: false },
});

export const UserSubmission = models.UserSubmission || model("UserSubmission", UserSubmissionSchema);
