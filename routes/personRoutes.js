 const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');
const validator = require('../validators/personValidator');

router.post('/', validator.validatePerson, personController.create);
router.get('/', personController.getAll);
router.get('/:id', personController.getById);
router.put('/:id', validator.validatePerson, personController.updateById);
router.delete('/:id', personController.deleteById);

module.exports = router;