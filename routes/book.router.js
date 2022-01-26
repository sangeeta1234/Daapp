const express = require("express")
const BookApp = require('../controllers/book/BookController');
const router = express.Router();
const validate = require("../middlewares/validate");

router.get('/getbook', BookApp.getBookdetail);

module.exports = router;