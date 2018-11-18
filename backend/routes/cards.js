const express = require("express");

const Card = require("../models/card");

const router = express.Router();

const cardData = require('../data/cardData.json');

router.get("", (req, res) => {
  console.log(cardData);
});

module.exports = router;