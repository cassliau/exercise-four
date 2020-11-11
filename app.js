const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

//Config values for fire base
var firebaseConfig = {
  apiKey: "AIzaSyDYIElRHz5A2QKF88lsXvPqGvrmh-pWHI0",
  authDomain: "exercise-four-9ed5a.firebaseapp.com",
  databaseURL: "https://exercise-four-9ed5a.firebaseio.com",
  projectId: "exercise-four-9ed5a",
  storageBucket: "exercise-four-9ed5a.appspot.com",
  messagingSenderId: "96658952468",
  appId: "1:96658952468:web:1100410ee78be0cc2cb201",
};

//Firebase
const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

//routes import
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/createBlogpost.js");

//routes
app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);

app.listen(port, () =>
  console.log(`Exercise four is running at localhost:${port}`)
);
