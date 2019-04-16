const Product = require('../models/product'); // product model

exports.getAddProduct = (req, res, next) => {
	// renders add product form
	res.render('admin/edit-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		editing: false
	});
};

// intercepts the new product information and saves it
exports.postAddProduct = (req, res, next) => {
	const title = req.body.title;
	const imageUrl = req.body.imageUrl;
	const price = req.body.price;
	const description = req.body.description;
	req.user
		.createProduct({ title, price, imageUrl, description })
		.then((response) => {
			console.log('created product');
			res.redirect('/admin/products');
		})
		.catch((error) => {
			console.log('error', error);
		});
};

// renders the edit form (very similar to add product) with product information
exports.getEditProduct = (req, res, next) => {
	const editMode = req.query.edit; // recives query params -> edit=true
	if (!editMode) {
		return res.redirect('/');
	}
	const prodId = req.params.productId; // url -> products/12345 -> id = 12345
	req.user
		.getProducts({ where: { id: prodId } })
		.then((products) => {
			const product = products[0];
			if (!product) {
				return res.redirect('/');
			}
			res.render('admin/edit-product', {
				pageTitle: 'Edit Product',
				path: '/admin/edit-product',
				editing: editMode,
				product: product // pass the product information
			});
		})
		.catch((err) => console.log(err));
};

// intercepts all the new information for a updating a product
exports.postEditProduct = (req, res, next) => {
	const prodId = req.body.productId;
	const updatedTitle = req.body.title;
	const updatedPrice = req.body.price;
	const updatedImageUrl = req.body.imageUrl;
	const updatedDesc = req.body.description;
	Product.findByPk(prodId)
		.then((product) => {
			product.title = updatedTitle;
			product.price = updatedPrice;
			product.imageUrl = updatedImageUrl;
			product.description = updatedDesc;
			return product.save();
		})
		.then(() => {
			console.log('Updated Product');
			res.redirect('/admin/products');
		})
		.catch((err) => console.log(err));
};

// get all products
exports.getProducts = (req, res, next) => {
	req.user
		.getProducts()
		.then((products) => {
			res.render('admin/products', {
				prods: products,
				pageTitle: 'Admin Products',
				path: '/admin/products'
			});
		})
		.catch((err) => console.log(err));
};

// deletes products
exports.postDeleteProduct = (req, res, next) => {
	const prodId = req.body.productId;
	Product.findByPk(prodId)
		.then((product) => {
			return product.destroy();
		})
		.then(() => {
			res.redirect('/admin/products');
			console.log('Product Deleted');
		})
		.catch((err) => console.log(err));
};
