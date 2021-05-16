const Router = require('express');
const router = Router();
const workController = require('../controllers/workController');

router.post('/', workController.create);
router.get('/', workController.getAll);
router.get('/by-id/:id', workController.getById);

module.exports = router;
