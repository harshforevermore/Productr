import Product from '../models/Product.js';

// Create new product
export const createProduct = async (req, res) => {
  try {
    const {
      productName,
      productType,
      quantity,
      mrp,
      sellingPrice,
      brandName,
      images,
      exchangeEligible
    } = req.body;

    // Validation
    if (!productName || !productType || !quantity || !mrp || !sellingPrice || !brandName) {
      return res.status(400).json({
        success: false,
        message: 'All required fields must be provided'
      });
    }

    if (!images || images.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'At least one product image is required'
      });
    }

    const product = await Product.create({
      userId: req.user._id,
      productName,
      productType,
      quantity: Number(quantity),
      mrp: Number(mrp),
      sellingPrice: Number(sellingPrice),
      brandName,
      images,
      exchangeEligible: exchangeEligible || 'yes',
      isPublished: false
    });

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      product
    });

  } catch (error) {
    console.error('Create product error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create product'
    });
  }
};

// Get all products for logged-in user
export const getProducts = async (req, res) => {
  try {
    const { published } = req.query;
    
    const filter = { userId: req.user._id };
    
    if (published !== undefined) {
      filter.isPublished = published === 'true';
    }

    const products = await Product.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      products
    });

  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products'
    });
  }
};

// Get single product
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.status(200).json({
      success: true,
      product
    });

  } catch (error) {
    console.error('Get product error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch product'
    });
  }
};

// Update product
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    const allowedUpdates = [
      'productName',
      'productType',
      'quantity',
      'mrp',
      'sellingPrice',
      'brandName',
      'images',
      'exchangeEligible'
    ];

    allowedUpdates.forEach(field => {
      if (req.body[field] !== undefined) {
        product[field] = req.body[field];
      }
    });

    await product.save();

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      product
    });

  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update product'
    });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully'
    });

  } catch (error) {
    console.error('Delete product error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete product'
    });
  }
};

// Publish/Unpublish product
export const togglePublish = async (req, res) => {
  console.log("TogglePublish");
  try {
    console.log("req.params: ", req.params);
    console.log("req.user: ", req.user);
    console.log("req.body: ", req.body);
    const product = await Product.findOne({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    product.isPublished = !product.isPublished;
    await product.save();

    res.status(200).json({
      success: true,
      message: `Product ${product.isPublished ? 'published' : 'unpublished'} successfully`,
      product
    });

  } catch (error) {
    console.error('Toggle publish error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update product status'
    });
  }
};