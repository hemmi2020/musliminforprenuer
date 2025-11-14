import mongoose from 'mongoose';

const AffiliateClickSchema = new mongoose.Schema({
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
  clickedAt: {
    type: Date,
    default: Date.now
  },
  converted: {
    type: Boolean,
    default: false
  },
  conversionAt: Date,
  commissionAmount: Number
}, {
  timestamps: true
});

AffiliateClickSchema.index({ userId: 1, trainingId: 1 });
AffiliateClickSchema.index({ converted: 1 });

export default mongoose.models.AffiliateClick || mongoose.model('AffiliateClick', AffiliateClickSchema);