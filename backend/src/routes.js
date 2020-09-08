const express = require('express');
const SessionControlle = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const ProfileController = require('./controllers/profileController');
const BookingController = require('./controllers/BookingController');

const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionControlle.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/profileController', ProfileController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;