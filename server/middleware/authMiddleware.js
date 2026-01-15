import User from '../models/User.js';

const authMiddleware = async (req, res, next) => {
  try {
    // Get user ID from session/cookie (simplified - you can enhance with JWT)
    const userId = req.headers['x-user-id'];
    
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Invalid authentication'
    });
  }
};

export default authMiddleware;