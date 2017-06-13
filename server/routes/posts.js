const express = require('express');
const posts = require('../server/controllers').posts;
const router = express.Router();

/* GET users listing. */
router.get('/', posts.getAll);
router.get("/:id",posts.show);
router.post("/",posts.create);
router.put("/:id",posts.update);
router.delete("/:id",posts.delete);

module.exports = router;
