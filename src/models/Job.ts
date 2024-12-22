import mongoose, { Schema, Document } from 'mongoose';

interface IJob extends Document {
  companyName: string;
  datePosted: Date;
  applyLink: string;
  lastDateToApply: Date;
  location: string;
}

const jobSchema: Schema<IJob> = new Schema(
  {
    companyName: { type: String, required: true },
    datePosted: { type: Date, required: true, default: Date.now },
    applyLink: { type: String, required: true },
    lastDateToApply: { type: Date, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
);

const Job = mongoose.models.Job || mongoose.model<IJob>('Job', jobSchema);

export default Job;
