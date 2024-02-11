require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;
const mongodbConnection = require("./config/mongodbConnection");

app.get("/", (req, res) => {
  res.send("Welcome to SkillKraft");
});

mongodbConnection
  .run()
  .then(() => {
    // MongoDB connection is established, now start the server
    app.listen(port, () => {
      console.log(`SkillKraft app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to establish MongoDB connection:", err);
  });
