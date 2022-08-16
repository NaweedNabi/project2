const router = require('express').Router();
const drinkRoutes = require('./drinkRoutes');

router.use('/', drinkRoutes)

module.exports = router;