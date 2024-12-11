const express = require("express");
const app = express();

// Set the server port (default to 3000)//
const port = process.env.PORT || 3000;

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello, Azure App Service! Your Node.js container is running!!!!! 🚀");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
