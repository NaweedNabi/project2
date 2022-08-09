const router = require('express').Router();


const drinkRoutes = require('./drinkRoutes');





router.use('/drinks', drinkRoutes)


module.exports = router;