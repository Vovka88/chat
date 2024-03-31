import { createContext, useContext } from "react";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyAt2UffPiHXDh5wlpgUVUB5KBz7c_7AC-4", 
  authDomain: "perfectchat-89ccb.firebaseapp.com", 
  projectId: "perfectchat-89ccb", 
  storageBucket: "perfectchat-89ccb.appspot.com", 
  messagingSenderId: "310569895534", 
  appId: "1:310569895534:web:4c89a85dc882f15ae3487f"

  // apiKey: "AIzaSyBB7Y34IYDigJ9x3Lf2UqTPGCF7LXaaitQ",
  // authDomain: "chat-47052.firebaseapp.com",
  // projectId: "chat-47052",
  // storageBucket: "chat-47052.appspot.com",
  // messagingSenderId: "1037664140675",
  // appId: "1:1037664140675:web:b97ab892ef3fbb4d9c4ab6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const firestore = firebase.firestore()


const AppContext = createContext()

export const useAppContext = ()=>{
    return useContext(AppContext)
}

export const AppProvider = ({children}) =>{
    return (<AppContext.Provider value={{firebase, auth, firestore}}>{children}</AppContext.Provider>)
}