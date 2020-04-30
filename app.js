const express = require("express");
const morgan = require("morgan");
const models = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");

const app = express();

app.use("/wiki", wikiRouter);
app.use(morgan("dev"));
app.use(express.static(__dirname + "./public"));
// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.send("hello world");
});

// db.authenticate().then(() => {
//   console.log("connected to the database");
// });

const PORT = 3000;

const init = async () => {
  await models.db.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
};

init();
