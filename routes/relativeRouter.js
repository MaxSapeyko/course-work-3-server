const Router = require('express');
const router = Router();
const relativeController = require('../controllers/relativeController');

router.post('/', relativeController.create);
router.get('/', relativeController.getAll);
router.get('/by-id/:id', relativeController.getById);

module.exports = router;
