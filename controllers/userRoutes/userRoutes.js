const router = require('express').Router();
const  withAuth  = require('../../utils/auth');
const User = require('../../models/user.js');


router.get('/home', (req, res) => {
	res.render('login')
});

router.post('/create', (req, res) => {
	const userData = req.body;
	console.log(userData)
	try {
		User.create(userData);

		req.session.save(() => {
			req.session.user_id = userData.id;
			req.session.logged_in = true;
	  
			res.status(200).json(userData);
		  });
	}catch (err) {
		res.status(500)
	}
});

router.get('/login', (req, res) =>{
	res.render('login')
})

router.post('/login', async (req, res) => {
	console.log(req)
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
		
	  });
  
	} catch (err) {
		console.log('this not wokring?')
	  res.status(400).json(err);
	}
	
  });

  router.post('/logout', (req, res) => {
	if (req.session.logged_in) {
	  req.session.destroy(() => {
		res.status(204).end();
	  });
	} else {
	  res.status(404).end();
	}
  });


module.exports = router;