const router = require('express').Router();
const drinksAPI = 'www.thecocktaildb.com/api/json/v1/1/search.php?s='
const randomDrinksAPI = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'



router.get('/', async (req, res) => {
    let drinkObj = await fetch(randomDrinksAPI)
    let drinkData = await drinkObj.json();
    console.log(drinkData);
    res.json(drinkData);
});

module.exports = router;