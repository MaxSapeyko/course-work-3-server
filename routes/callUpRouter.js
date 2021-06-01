const Router = require('express');
const router = Router();
const callUpController = require('../controllers/callUpController');

router.post('/add', callUpController.create);
router.patch('/update-conscripts/:id/:conscriptId', callUpController.updateConscripts);
router.get('/', callUpController.getAll);
router.get('/by-com-id/:id', callUpController.getByCommId);

module.exports = router;
