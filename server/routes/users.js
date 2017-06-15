const express = require('express');
const users = require('../server/controllers').users;
const router = express.Router();

/* GET users listing. */
router.get('/', users.getAll);
router.get("/:id",users.show);
router.post("/",users.create);
router.put("/:id",users.update);
router.delete("/:id",users.delete);

module.exports = router;
