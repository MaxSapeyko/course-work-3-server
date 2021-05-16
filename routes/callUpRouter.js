const Router = require('express');
const router = Router();
const callUpController = require('../controllers/callUpController');

router.post('/add', callUpController.create);
router.get('/', callUpController.getAll);
router.get('/by-com-id/:id', callUpController.getByCommId);

module.exports = router;
