const Router = require('express');
const router = Router();
const conscriptController = require('../controllers/conscriptController');

router.post('/add', conscriptController.create);
router.get('/', conscriptController.getAll);
router.post('/by-idArr', conscriptController.getByIdArr);
router.patch('/update-call-up-id/:id/:callUpId', conscriptController.updateCallUpId);
router.delete('/delete-by-id:id', conscriptController.delById);

module.exports = router;
