const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({
        message: "Please login first",
      });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);

    if (!req.user) {
      res.status(500)
        .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
        .json({
          success: true,
          message: "Dont send the nsfw please",
        });
    }else{
      next();
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
