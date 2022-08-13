const router = require('express').Router();
const drinksAPI = 'www.thecocktaildb.com/api/json/v1/1/search.php?s='
const randomDrinksAPI = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
// const Cocktail = require('../../models/cocktails')

router.get('/', async (req, res) => {
    let drinkObj = await fetch(randomDrinksAPI)
    let drinksObj = await drinkObj.json();
    res.render('homepage', drinksObj.drinks[0]);
    // console.log(drinks)

    
});

// router.get('/searched-drink', async (req, res) => {
//     let drinkObj = await fetch(drinksAPI)
//     let drink = await drinkObj.json();
//     res.json(drink);
    
// });

// router.post('/', async (req, res) => {
//     try { 
//       const dishData = await Cocktail.create({
//       name: req.body.name,
//       isAlcoholic: req.body.isAlcoholic,
//       ingredients: req.body.ingredients,
//       recipe: req.body.recipe,
//     });
//     // if the cocktail is successfully created, the new response will be returned as json
//     res.status(200).json(dishData)
//   } catch (err) {
//     res.status(400).json(err);
//   }
//   });

module.exports = router;