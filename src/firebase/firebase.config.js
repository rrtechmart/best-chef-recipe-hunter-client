// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq2Q_UUlAOApaXRn7WYLSEn8xP-UknZYo",
  authDomain: "best-chef-recipe-hunter-client.firebaseapp.com",
  projectId: "best-chef-recipe-hunter-client",
  storageBucket: "best-chef-recipe-hunter-client.appspot.com",
  messagingSenderId: "654230056384",
  appId: "1:654230056384:web:a65d1c526e06d57f492c25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;