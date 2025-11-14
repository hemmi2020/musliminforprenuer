import mongoose from 'mongoose';

const WatchProgressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  trainingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Training',
    required: true
  },
  progress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  lastWatched: {
    type: Date,
    default: Date.now
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

WatchProgressSchema.index({ userId: 1, trainingId: 1 }, { unique: true });

export default mongoose.models.WatchProgress || mongoose.model('WatchProgress', WatchProgressSchema);