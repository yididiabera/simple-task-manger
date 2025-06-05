const validateTask = (req, res, next) => {
  const { title, status } = req.body;

  if (req.method === "POST" || req.method === "PUT") {
    if (!title || title.trim() === "") {
      return res.status(400).json({ error: "Title is required" });
    }
  }

  if (status && !["pending", "completed"].includes(status)) {
    return res
      .status(400)
      .json({ error: 'Status must be "pending" or "completed"' });
  }

  next();
};

module.exports = validateTask;
