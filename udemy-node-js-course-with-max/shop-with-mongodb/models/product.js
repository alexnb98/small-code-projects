const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product {
	constructor(title, price, description, imageUrl, id, userId) {
		this.title = title;
		this.price = price;
		this.description = description;
		this.imageUrl = imageUrl;
		this._id = id ? new mongodb.ObjectId(id) : null;
		this.userId = new mongodb.ObjectId(userId);
	}

	save() {
		const db = getDb();
		let dbOp;
		if (this._id) {
			dbOp = db.collection('products').updateOne({ _id: this._id }, { $set: this });
		} else {
			dbOp = db.collection('products').insertOne(this);
		}
		return dbOp
			.then((result) => {
				console.log(result);
			})
			.catch((err) => console.log('err', err));
	}

	static fetchAll() {
		const db = getDb();
		return db
			.collection('products')
			.find()
			.toArray()
			.then((result) => {
				console.log('result', result);
				return result;
			})
			.catch((error) => {
				console.log('error', error);
			});
	}

	static findById(prodId) {
		const db = getDb();
		return db
			.collection('products')
			.find({ _id: new mongodb.ObjectId(prodId) })
			.next()
			.then((product) => product)
			.catch((error) => {
				console.log('error', error);
			});
	}

	static deleteById(prodId) {
		const db = getDb();
		return db
			.collection('products')
			.deleteOne({ _id: new mongodb.ObjectId(prodId) })
			.then(() => console.log('deleted product'))
			.catch((error) => {
				console.log('error', error);
			});
	}
}

module.exports = Product;
