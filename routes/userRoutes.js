const express = require('express');
const userController = require('./../controllers/userControllers');

const router = express.Router();

router.route('/').get(userController.getAlluser).post(userController.createUser)
router.route('/:id').get(userController.getUser)

module.exports = router;