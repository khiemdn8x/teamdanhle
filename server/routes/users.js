const express = require('express');
const users = require('../server/controllers').users;
const router = express.Router();

/* GET users listing. */
router.get('/users', users.getAll);
router.get("/users/:id",users.show);
router.post("/users",users.create);
router.put("/users/:id",users.update);
router.delete("/users/:id",users.delete);

module.exports = router;
