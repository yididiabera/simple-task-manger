// src/middlewares/auth.js
const fs = require("fs");
const path = require("path");

const API_KEYS_PATH = path.join(__dirname, "../data/api-keys.json");

const validateApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res.status(401).json({ error: "API key missing" });
  }

  const validKeys = JSON.parse(fs.readFileSync(API_KEYS_PATH, "utf8"));

  if (!validKeys.includes(apiKey)) {
    return res.status(403).json({ error: "Invalid API key" });
  }

  next(); // Proceed if key is valid
};

module.exports = validateApiKey;
