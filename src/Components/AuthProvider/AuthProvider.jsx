import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext  = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
//createUser 
const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)

}

const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)

}

const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)

}

const signInWithGithub = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider)

}


const logOut = () => {
return signOut(auth)
}

const  UserUpdate= (name,photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
}





useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser)
        setLoading(false)
    })
    return ()=> {
        return unSubscribe()
    }
},[user])

    const authInfo = {
        
        createUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        user,
        logOut,
        UserUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;