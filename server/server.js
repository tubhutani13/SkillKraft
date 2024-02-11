require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const AuthRoutes = require("./routes/auth.route.js");
const UserRoutes = require("./routes/user.route.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGODB_URI, {
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");

    // Start the server
    app.listen(port, () => {
      console.log(`SkillKraft app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit the process if connection fails
  });

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to SkillKraft");
});
app.use("/auth", AuthRoutes);
app.use('/users', UserRoutes);
