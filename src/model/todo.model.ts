import mongoose, { Document } from "mongoose";

interface Todo extends Document {
  title: String;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdAt: { 
      type: Date,
      default: Date.now 
    },
    updatedAt: {
      type: Date, 
      default: Date.now,
  },
});

export const TaskModel = mongoose.model<Todo>('Task', todoSchema);
