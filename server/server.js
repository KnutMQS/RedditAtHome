const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("RedditAtHome lmao");
});

app.get("/api/posts", (req, res) => {
  res.json([
    { id: 1, title: "Welcome to RedditAtHome", author: "KnutMQS" },
    { id: 2, title: "This is our second post", author: "TestUser" },
  ]);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
