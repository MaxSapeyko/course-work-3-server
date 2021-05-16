const Router = require('express');
const router = Router();
const conscriptController = require('../controllers/conscriptController');

router.post('/add', conscriptController.create);
router.get('/', conscriptController.getAll);
router.post('/by-idArr', conscriptController.getByIdArr);

module.exports = router;
