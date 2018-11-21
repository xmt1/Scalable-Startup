const express = require("express");

const Card = require("../models/card");

const router = express.Router();

const cardData = require('../data/cardData.json');

router.get("", (req, res) => {
  res.send(cardData);
});

module.exports = router;