import mongoose, { Schema, models } from 'mongoose';

const lessonSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  youtubeUrl: { type: String, required: true },
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
}, { timestamps: true });

export const Lesson = models.Lesson || mongoose.model('Lesson', lessonSchema);
