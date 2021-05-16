const Router = require('express');
const router = Router();
const medicalController = require('../controllers/medicalController');

router.post('/', medicalController.create);
router.get('/', medicalController.getAll);

module.exports = router;
