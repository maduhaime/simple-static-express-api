const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");

const apiRoutes = require("./routes/api");

// Environment variables from .env file
dotenv.config();

// Express application
const app = express();

// Additionnal security
app.use(helmet());

// Parses incomming request of type "application/json" and "application/x-www-form-urlencoded"
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serves static files (from the "public" folder)
app.use(express.static(__dirname + "/public"));

// Routes
app.use("/api", apiRoutes);

app.all("*", (req, res) => {
  res.status(404);
  res.json({ message: `Sorry, the endpoint ${req.url} does not exist.` });
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Express is running on port ${PORT}`);
