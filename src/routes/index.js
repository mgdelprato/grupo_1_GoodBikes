const express = require('express');
const router = express.Router();
const multer = require('multer');
const mainController = require('../controllers/mainController.js');
const path = require('path');

router.get('/', mainController.index);

module.exports= router;