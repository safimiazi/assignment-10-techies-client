import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext  = createContext(null)
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
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

const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider)

}



    const authInfo = {
        
        createUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;