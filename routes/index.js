//show all blogposts
const express = require("express");
const router = express.Router();

//Require Firebase
const firebase = require("firebase");

//init firebase database
const db = firebase.firestore();

//reference a speciic collection
const blogposts = db.collection("blog posts");

router.get(`/`, (req, res) => {
  //inside of this arrow function, we can do anything we want as long as we return at the end

  //init empty array
  const blogpostsArray = [];

  blogposts
    .get()
    .then((querySnapshot) => {
      console.log("querySnapshot", querySnapshot);
      //loop through query snapshot and push into array
      querySnapshot.forEach((doc) => {
        blogpostsArray.push(doc.data());
      });
      //return array
      return res.send(blogpostsArray);
    })
    .catch(function (e) {
      console.warn("error:", e);
      //must return sth
      return res.send(error);
    });
});

module.exports = router;
