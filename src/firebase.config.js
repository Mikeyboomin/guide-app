import { getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBJHPPmH3Q61Mk_gOTKQzSHt6F5rpHMlF0",
    authDomain: "foodapp-c63f3.firebaseapp.com",
    databaseURL: "https://foodapp-c63f3-default-rtdb.firebaseio.com",
    projectId: "foodapp-c63f3",
    storageBucket: "foodapp-c63f3.appspot.com",
    messagingSenderId: "521377103231",
    appId: "1:521377103231:web:ecf688d38157fe65d0ae4a",
    measurementId: "G-J1MWP0P04H"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };