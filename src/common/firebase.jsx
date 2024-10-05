import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4mXnKHmL5FjSCQK3bXvyBgg0HsLVbKAI",
  authDomain: "blog-website-20629.firebaseapp.com",
  projectId: "blog-website-20629",
  storageBucket: "blog-website-20629.appspot.com",
  messagingSenderId: "799343100855",
  appId: "1:799343100855:web:e4b2b220ed44fe23bd5e32",
};

const app = initializeApp(firebaseConfig);

// google auth
const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
  let user = null;

  await signInWithPopup(auth, provider)
    .then((result) => {
      user = result.user;
    })
    .catch((err) => {
      console.log(err);
    });

  return user;
};
