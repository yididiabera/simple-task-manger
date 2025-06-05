const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/", routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
