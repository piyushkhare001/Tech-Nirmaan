// /models/Project.ts
import  { Schema, models, model } from 'mongoose';

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const Project = models.Project || model('Project', ProjectSchema);
