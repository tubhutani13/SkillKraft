const jwt = require("jsonweb token");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const authMiddleware = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.body._id = decoded?.id;

    next();
  });
};

module.exports = authMiddleware;
