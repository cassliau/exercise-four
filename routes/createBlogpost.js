//create blogpost
const express = require("express");
const router = express.Router();

const form = `
<form>
    <input type="text" name= "title" placeholder = "Title of Post"/>
    <input type="text" name= "author" placeholder = "Author"/>
    <input type="text" name= "text" placeholder = "Text"/>
    <button type ="submit"> Submit </button>
</form>
`;

router.get(`/`, (req, res) => res.send(form));

module.exports = router;
