const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session'); // express session plugin
const MongoDBStore = require('connect-mongodb-session')(session); // session plugin with mongoDB
const csrf = require('csurf');
const flash = require('connect-flash');

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI = 'mongodb+srv://alex:alex0502@cluster0-atcfx.mongodb.net/shop';

const app = express();

const csrfProtection = csrf();

// create store with mongodb session plugin
const store = new MongoDBStore({
	uri: MONGODB_URI,
	collection: 'sessions' //create collection that saves sessions
});

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// session middleware
app.use(session({ secret: 'my secret', resave: false, saveUninitialized: false, store: store }));

app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
	if (!req.session.user) {
		return next();
	}
	User.findById(req.session.user._id)
		.then((user) => {
			req.user = user;
			next();
		})
		.catch((err) => console.log(err));
});

app.use((req, res, next) => {
	res.locals.isAuthenticated = req.session.isLoggedIn;
	res.locals.csrfToken = req.csrfToken();
	next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
	.connect(MONGODB_URI, {
		useNewUrlParser: true
	})
	.then(() => {
		app.listen(3000);
	})
	.catch((err) => {
		console.log(err);
	});
