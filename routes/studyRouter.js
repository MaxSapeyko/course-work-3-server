const Router = require('express');
const router = Router();
const studyController = require('../controllers/studyController');

router.post('/create-new', studyController.create);
router.get('/', studyController.getAll);
router.get('/by-id/:id', studyController.getById);

module.exports = router;
