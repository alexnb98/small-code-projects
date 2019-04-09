import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
	apiKey: 'AIzaSyCyMhILBQK1TROVATd0z66jtlYEnh6IlLs',
	authDomain: 'fake-shop.firebaseapp.com',
	databaseURL: 'https://fake-shop.firebaseio.com',
	projectId: 'fake-shop',
	storageBucket: 'fake-shop.appspot.com',
	messagingSenderId: '668871138196'
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
