import mongoose from 'mongoose';

const TrainingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  thumbnail: String,
  category: {
    type: String,
    required: true
  },
  instructorName: {
    type: String,
    required: true
  },
  instructorBio: String,
  instructorImage: String,
  previewVideoUrl: {
    type: String,
    required: true
  },
  fullCourseUrl: {
    type: String,
    required: true
  },
  affiliateRate: {
    type: Number,
    default: 0.15
  },
  duration: Number, // in minutes
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced']
  },
  language: {
    type: String,
    default: 'fr'
  },
  published: {
    type: Boolean,
    default: false
  },
  likes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

TrainingSchema.index({ slug: 1 });
TrainingSchema.index({ category: 1 });
TrainingSchema.index({ published: 1 });

export default mongoose.models.Training || mongoose.model('Training', TrainingSchema);