const express = require("express");
const router = express.Router();
const { getSafetyScore } = require("../utils/safetyLogic");

router.post("/score", (req, res) => {
  const score = getSafetyScore(req.body);
  res.json({ safetyScore: score });
});

module.exports = router;
    