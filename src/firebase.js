import { initializeApp } from 'firebase/app';
//Firebase FIRESTORE functions
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//firebase storage function
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
    apiKey: "AIzaSyB8PwhSYdpkJXjm-a4R7A2oKKPXX50M_NQ",
    authDomain: "vueonlinestore-893fb.firebaseapp.com",
    projectId: "vueonlinestore-893fb",
    storageBucket: "vueonlinestore-893fb.appspot.com",
    messagingSenderId: "523419966157",
    appId: "1:523419966157:web:abc89bf13cabc710182784"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app,db,collection,getDocs, getStorage, ref, uploadBytesResumable, getDownloadURL}