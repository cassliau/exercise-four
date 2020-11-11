//show one blog post
const express = require("express");

const router = express.Router();

router.get(`/`, (req, res) => res.send(`Show a Blogposts`));

module.exports = router;
