// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBif8nKzZizhROKafKpcHO_baBobrHxtfU",
    authDomain: "icchaporon-98a1a.firebaseapp.com",
    projectId: "icchaporon-98a1a",
    storageBucket: "icchaporon-98a1a.appspot.com",
    messagingSenderId: "833110669322",
    appId: "1:833110669322:web:8807e2d859cdd3993507f3",
    measurementId: "G-1LGNT7HHT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app