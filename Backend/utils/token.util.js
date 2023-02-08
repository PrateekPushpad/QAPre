const jwt = require("jsonwebtoken");

const JWT_SECRET = "Secret";

exports.createJwtToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  return token;
};

exports.verifyJwtToken = (token, next) => {
  try {
    const { userId } = jwt.verify(token, JWT_SECRET);
    return userId;
  } catch (err) {
    next(err);
  }
};