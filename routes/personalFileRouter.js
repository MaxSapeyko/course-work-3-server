const Router = require('express');
const router = Router();
const personalFileController = require('../controllers/personalFileController');

router.post('/', personalFileController.create);
router.get('/get-all', personalFileController.getAll);

module.exports = router;
