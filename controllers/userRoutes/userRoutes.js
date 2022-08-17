const router = require('express').Router();
const  withAuth  = require('../../utils/auth');
const User = require('../../models/user.js');


router.get('/home', (req, res) => {
	res.render('login')
});

router.post('/createUser', (req, res) => {
	let request = req.body;
	console.log(request);
	User.create({
		username: request.username,
		email: request.email,
		password: request.password
	})
		 .then(dbUserData => {
			req.session.save(() => {
				req.session.user_id = dbUserData.id;
				req.session.username = dbUserData.username;
				req.session.loggedIn = true;
				
				res.render('drinkSearch');
				console.log(dbUserData);
			});
		})
		.catch(err => {
			// console.log(err);
			res.status(500).send('please sign up before using!');
		});
		
});

router.post('/login', async (req, res) => {
	try {
	  const userData = await User.findOne({ where: { email: req.body.email } });
  
	  if (!userData) {
		res
		  .status(400)
		  .json({ message: 'Incorrect email or password, please try again' });
		return;
	  }
  
	  const validPassword = await userData.checkPassword(req.body.password);
  
	  if (!validPassword) {
		res
		  .status(400)
		  .json({ message: 'Incorrect email or password, please try again' });
		return;
	  }
  
	  req.session.save(() => {
		req.session.user_id = userData.id;
		req.session.logged_in = true;
		console.log(userData)
		res.render('drinkSearch', userData);
	  });
  
	} catch (err) {
		console.log('this not wokring?')
	  res.status(400).json(err);
	}
	
  });


module.exports = router;