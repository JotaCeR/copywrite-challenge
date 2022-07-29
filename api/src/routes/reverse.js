const { Router } = require('express');
const router = Router();
const reverseController = require('../controllers/reverse.controller');
const getQueryParams = require('../middlewares/getQueryParams');

router.get('/', [getQueryParams], reverseController);

module.exports = router
