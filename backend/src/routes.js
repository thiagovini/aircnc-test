const express = require('express');
const SessionControlle = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionControlle.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

module.exports = routes;