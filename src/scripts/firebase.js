// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';
// import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { changeUserIcon } from './authUser';

const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: FIREBASE_API_KEY,
	authDomain: 'filmotekajs-eccb6.firebaseapp.com',
	projectId: 'filmotekajs-eccb6',
	storageBucket: 'filmotekajs-eccb6.appspot.com',
	messagingSenderId: '372461862015',
	appId: '1:372461862015:web:fc1319ed3067055e54d34a',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

const dataBaseUrl = process.env.FIREBASE_DB_URL;

export const dataBase = getDatabase(firebaseApp, dataBaseUrl);

// const db = getFirestore(firebaseApp);
// db.collection('movies').getDocs();
// const moviesCollection = collection(db, 'movies');
// const snapshot = await getDocs(moviesCollection);

onAuthStateChanged(auth, (user) => {
	changeUserIcon(user?.accessToken);
	if (!user) {
		console.log('User is not logged in!');
		console.log(user);
	} else {
		console.log('User is logged in!');
		console.log(user);
	}
});
