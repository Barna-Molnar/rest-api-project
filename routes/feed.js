const express = require('express');
const feedController = require('../controllers/feed')

const router = express.Router();


// GET url: feed/posts
router.get('/posts', feedController.getPosts);

module.exports = router;