const Router = require('express');
const router = Router();
const callUpRouter = require('./callUpRouter');
const commissariatRouter = require('./commissariatRouter');
const conscriptRouter = require('./conscriptRouter');
const medicalRouter = require('./medicalRouter');
const personalFileRouter = require('./personalFileRouter');
const relativeRouter = require('./relativeRouter');
const studyRouter = require('./studyRouter');
const workRouter = require('./workRouter');

router.use('/callup', callUpRouter);
router.use('/commissariat', commissariatRouter);
router.use('/conscript', conscriptRouter);
router.use('/medical', medicalRouter);
router.use('/personalFile', personalFileRouter);
router.use('/relative', relativeRouter);
router.use('/study', studyRouter);
router.use('/work', workRouter);

module.exports = router;
