// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, push, ref, set, query, get } from 'firebase/database';
import { changeUserIcon, userState } from './authUser';
import { showErrorMessage } from './toastifyMessages';

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

export const writeMovieDB = (userId, typeOfMovieList, userMovies) => {
	if (!userId) {
		showErrorMessage('User is not logged in!');
		return;
	}

	const referenceDB = ref(dataBase, `moviesDB/${userId}/${typeOfMovieList}`);
	try {
		set(referenceDB, {
			userMovies,
		});
	} catch (error) {
		showErrorMessage(error.message);
	}
};

export const readMovieDB = async (userId, typeOfMovieList) => {
	// if (!userId) {
	// 	showErrorMessage('User is not logged in!');
	// 	return;
	// }

	const referenceDB = ref(dataBase, `moviesDB/${userId}/${typeOfMovieList}`);
	try {
		const snapshot = await get(referenceDB);

		console.log(snapshot.val());

		return snapshot.val();
	} catch (error) {
		showErrorMessage(error.message);
	}
};

onAuthStateChanged(auth, (user) => {
	changeUserIcon(user?.accessToken);
	userState.userId = user?.uid;
	readMovieDB(user?.uid, 'watchedMovies');
	readMovieDB(user?.uid, 'queueMovies');
});
