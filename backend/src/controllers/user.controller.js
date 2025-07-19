import User from "../models/user.model.js";

// @desc    Get user profile
// @route   GET /profile
// @access  Private
export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');

        res.json({ user });
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
};