const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.salvaruser);
router.get('/:username', userController.buscaruser);

module.exports = router;
