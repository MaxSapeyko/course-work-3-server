const Router = require('express');
const router = Router();
const commissariatController = require('../controllers/commissariatController');

router.post('/add', commissariatController.create);
router.get('/', commissariatController.getAll);

module.exports = router;
