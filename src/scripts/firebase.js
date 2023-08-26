// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const API_KEY = import.meta.env.VITE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'filmotekajs-eccb6.firebaseapp.com',
  projectId: 'filmotekajs-eccb6',
  storageBucket: 'filmotekajs-eccb6.appspot.com',
  messagingSenderId: '372461862015',
  appId: '1:372461862015:web:fc1319ed3067055e54d34a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
