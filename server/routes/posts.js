const express = require('express');
const posts = require('../server/controllers').posts;
const router = express.Router();

/* GET users listing. */
router.get('/posts', posts.getAll);
router.get("/posts/:id",posts.show);
router.post("/posts",posts.create);
router.put("/posts/:id",posts.update);
router.delete("/posts/:id",posts.delete);

module.exports = router;
