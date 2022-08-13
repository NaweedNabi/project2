const router = require('express').Router();
let drinksAPI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const randomDrinksAPI = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
// const Cocktail = require('../../models/cocktails')
// const searchTerm = document.querySelector('.searchTerm').value;
// const searchButton = document.getElementById('searchBtn');

router.get('/random-drink', async (req, res) => {
    let randomDrink = await fetch(randomDrinksAPI)
    let drinkObj = await randomDrink.json();
    console.log(drinkObj);
    console.log(drinkObj.drinks[0].idDrink)
    res.render('random-drink', drinkObj.drinks[0]);
    // console.log(drinks)

    
});

let searchTerm = 'Margarita';
// drinksAPI += searchTerm
console.log(drinksAPI+searchTerm)
router.get('/searched-drink', async (req, res) => {
    let searchDrink = await fetch(drinksAPI + searchTerm);
    
    let drinkObj = await searchDrink.json();
    console.log(drinkObj);
    res.render('searched-drink', drinkObj.drinks[0]);
    
});

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