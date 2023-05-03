/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import{GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext(null);
const auth= getAuth(app);
const foogleProvider = new GoogleAuthProvider();
const githhubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);

    }
    //google popup sign in 
    const googleSignin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, foogleProvider)
    }
    //github op up login
    const githubLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githhubProvider)
    }

    const logOut = () =>{
        setLoading(true)
        signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setUser(user)
            setLoading(false)
        })
        return () => unsubscribe();
    },[])

    const authInfo={
        user,
        createUser,
        userLogin,
        logOut,
        googleSignin,
        githubLogin,
        loading,

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;