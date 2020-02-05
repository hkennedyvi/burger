const express = require("express");
const burger = require("../models/burger");
const orm = require("../config/orm");
const router = express.Router();

router.get("/", (req, res) => {
  
    burger.selectAll(function(data) {
      var hbsObject = {
          burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});
// burger.selectAll("burgers");
module.exports = router;