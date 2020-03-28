const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require("./routes/api/posts");
const tweets = require("./routes/api/tweets");

app.use("/api/posts", posts);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));
