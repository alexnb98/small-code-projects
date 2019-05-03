const User = require('../models/user');

exports.getLogin = (req, res, next) => {
	//   const isLoggedIn = req
	//     .get('Cookie')
	//     .split(';')[1]
	//     .trim()
	//     .split('=')[1] === 'true';
	console.log(req.session.isLoggedIn);
	res.render('auth/login', {
		path: '/login',
		pageTitle: 'Login',
		isAuthenticated: false
	});
};

exports.postLogin = (req, res, next) => {
	const userEmail = req.body.email;
	User.findOne({ email: userEmail })
		.then((user) => {
			console.log('user', user);
			req.session.user_id = user._id;
			req.session.isLoggedIn = true;
			res.redirect('/');
		})
		.catch((error) => {
			console.log('error', error);
		});
};
