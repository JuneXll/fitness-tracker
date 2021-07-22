const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

//Creates Express app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Creates mongoose db connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useCreateIndex:true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes"));

//Listen request
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
