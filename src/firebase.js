import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBB1Ac9msaOASD-umC_5Tnq3-4LSsOElXU',
    authDomain: 'vibesync-744d9.firebaseapp.com',
    projectId: 'vibesync-744d9',
    storageBucket: 'vibesync-744d9.firebasestorage.app',
    messagingSenderId: '187464685404',
    appId: '1:187464685404:web:d45bc9e513a7a2d01ed399',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
