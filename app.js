const express = require("express");

const app = express();

const port = process.env.POST || 4000;

//routes import
const indexRoute = require("./routes/index.js");

//routes
app.use(`/`, indexRoute);

app.listen(port, () =>
  console.log(`Exercise four is running at localhost:${port}`)
);
