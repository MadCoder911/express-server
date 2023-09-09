const express = require("express");
const path = require("path");

const messagesRouter = require("./routes/messages.router");
const friendsRouter = require("./routes/friends.router");

const app = express();
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
const port = 4000;

//middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}/${req.url}  ${delta}ms`);
});
//

// Json parsing middleware
app.use(express.json());
//friends router
// app.use("/site", express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.render("index.hbs", {
    title: "My friends",
    caption: "Let's go skiing",
  });
});
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
