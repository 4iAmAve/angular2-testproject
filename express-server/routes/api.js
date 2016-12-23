// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file
// const dbHost = 'mongodb://localhost/local-dev';
const dbHost = 'mongodb://database/angular2-testproject';

// Connect to mongodb
mongoose.connect(dbHost);

// create mongoose schema
const messageSchema = new mongoose.Schema({
  id: String,
  driverID: String,
  start: Number,
  end: Number
});

// create mongoose model
const Message = mongoose.model('Message', messageSchema);

/* GET api listing. */
router.get('/', (req, res) => {
		res.send('api works');
});

/* GET all message. */
router.get('/messages', (req, res) => {
	Message.find({}, (err, users) => {
		if (err) res.status(500).send(error)

		res.status(200).json(users);
	});
});

/* Create a message. */
router.post('/messages', (req, res) => {
	let message = new Message({
		id: req.body.id,
		driverID: req.body.driverID,
		start: req.body.startTime,
		end: req.body.endTime
	});

	message.save(error => {
		if (error) res.status(500).send(error);

		res.status(201).json({
			message: 'Message saved successfully'
		});
	});
});

module.exports = router;
