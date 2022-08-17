const { randomDrinkFunc, searchedDrinkFunc } = require('../../public/js/drinkObj.js');
const router = require('express').Router();
let drinksAPI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
// const randomDrinksAPI = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
// const { withAuth } = require('../../utils/auth');
// const Cocktail = require('../../models/cocktails')
// const searchTerm = document.querySelector('.searchTerm').value;
// const searchButton = document.getElementById('searchBtn');

router.get('/', async (req, res) => {
    res.render('homepage')
})

router.get('/drinks', async (req, res) => {
    res.render('drinkSearch')
})

router.get('/drinks/random', async (req, res) => {
    let randomDrink = await randomDrinkFunc();
    // console.log(randomDrink);
    res.render('drinks', randomDrink);
    // console.log(drinks)

    
});


// drinksAPI += searchTerm
// let searchTerm = 'vodka'
router.post('/drinks/search', async (req, res) => {
    let drinkObj = await fetch(drinksAPI + req.body.search);
    let response = await drinkObj.json();
    let i = Math.floor(Math.random() * response.drinks.length);
    let newDrink = response.drinks[i];
    res.render('drinks', newDrink);
});

// router.post('/users', async (req, res) => {
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

// router.post('/', (req, res) => {
// 	User.create({
// 		username: req.body.username,
// 		email: req.body.email,
// 		password: req.body.password
// 	})
// 		.then(dbUserData => {
// 			req.session.save(() => {
// 				req.session.user_id = dbUserData.id;
// 				req.session.username = dbUserData.username;
// 				req.session.loggedIn = true;

// 				res.json(dbUserData);
// 			});
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			res.status(500).json(err);
// 		});
// });

// router.post('/login', (req, res) => {
// 	// expects {email: 'lernantino@gmail.com', password: 'password1234'}
// 	User.findOne({
// 		where: {
// 			email: req.body.email
// 		}
// 	}).then(dbUserData => {
// 		if (!dbUserData) {
// 			res.status(400).json({ message: 'No user with that email address!' });
// 			return;
// 		}

// 		const validPassword = dbUserData.checkPassword(req.body.password);
// 		if (!validPassword) {
// 			res.status(400).json({ message: 'Incorrect password!' });
// 			return;
// 		}
// 		req.session.save(() => {
// 			req.session.user_id = dbUserData.id;
// 			req.session.username = dbUserData.username;
// 			req.session.loggedIn = true;

// 			res.json({ user: dbUserData, message: 'You are now logged in!' });
// 		});
// 	});
// });


module.exports = router;