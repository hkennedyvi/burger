const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
    // burger.selectAll((data) => {
    //   // const hbsObject = {
    //   //     burgers: data
    //   // };
    //   // console.log(hbsObject)
    // });
});

module.exports = router;