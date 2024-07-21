const express = require("express");

const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.listen("8008", () => {
  console.log(`Server running at port:3001`);
});
