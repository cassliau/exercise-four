const express = require("express");

const app = express();

const port = process.env.POST || 4000;

app.use(`/`, (req, res) => res.send(`Exercise Four`));

module.exports = router;
