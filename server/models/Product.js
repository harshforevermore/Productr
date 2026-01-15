import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  productName: {
    type: String,
    required: true,
    trim: true
  },
  productType: {
    type: String,
    required: true,
    enum: ['foods', 'electronics', 'clothes', 'beauty products', 'others']
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  mrp: {
    type: Number,
    required: true,
    min: 0
  },
  sellingPrice: {
    type: Number,
    required: true,
    min: 0
  },
  brandName: {
    type: String,
    required: true,
    trim: true
  },
  images: [{
    type: String,
    required: true
  }],
  exchangeEligible: {
    type: String,
    enum: ['yes', 'no'],
    default: 'yes'
  },
  isPublished: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index for better query performance
productSchema.index({ userId: 1, isPublished: 1 });

export default mongoose.model('Product', productSchema);