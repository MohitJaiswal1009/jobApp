import jwt from 'jsonwebtoken';

// Function to generate and send JWT token
export const sendToken = (user, statusCode, res, message) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE || '1d', // Use environment variable or default to '1d'
  });

  const options = {
    expires: new Date(Date.now() + parseInt(process.env.COOKIE_EXPIRE, 10) * 24 * 60 * 60 * 1000), // Convert days to milliseconds
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
