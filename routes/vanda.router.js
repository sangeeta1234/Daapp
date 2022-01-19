const express = require("express")
const VanDaApp = require('../controllers/VanDa/VanDaAppController');
const router = express.Router();
const validate = require("../middlewares/validate");

router.post('/endtrip', validate.ValidateRequest,VanDaApp.EndTrip);

module.exports = router;