const express = require('express');
const router = express.Router();

/* GET home page. */
router.options('*', function(req, res, next) {
  res.sendStatus(200);
});

module.exports = router;
