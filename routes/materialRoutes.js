const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');

router.post('/', materialController.uploadMaterial);
router.get('/', materialController.getMaterials);
router.post('/upload', materialController.uploadMaterial);


module.exports = router;
