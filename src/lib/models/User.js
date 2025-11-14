import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  name: String,
  emailVerified: Date,
  image: String,
  hashedPassword: String,
  subscriptionType: {
    type: String,
    enum: ['monthly', 'annual', null],
    default: null
  },
  subscriptionStatus: {
    type: String,
    enum: ['active', 'cancelled', 'expired', null],
    default: null
  },
  subscriptionEnd: Date,
  stripeCustomerId: String,
  stripeSubscriptionId: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {
  timestamps: true
});

export default mongoose.models.User || mongoose.model('User', UserSchema);