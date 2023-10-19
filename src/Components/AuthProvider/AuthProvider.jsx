import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext  = createContext(null)
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
//createUser 
const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)

}

const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)

}

const signInWithGoogle = () => {
    return signInWithPopup(auth, provider)

}



    const authInfo = {
        
        createUser,
        signInUser,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;