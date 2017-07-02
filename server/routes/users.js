const express = require('express');
const users = require('../server/controllers').users;
const router = express.Router();

/* GET users listing. */
router.get('/:offset/:limit', users.getAndCountAll);
router.get("/:id",users.show);
router.post("/",users.create);
router.put("/:id",users.update);
router.delete("/:id",users.delete);
router.delete("/:id/getAll",users.deleteAndGetAll);

module.exports = router;
