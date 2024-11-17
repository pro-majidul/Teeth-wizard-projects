import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from './../firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthProvider = createContext()
// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loader , setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const SignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
  

    const userProfleUpdate = (name, photo) =>{
       return updateProfile(auth.currentUser ,{displayName : name , photoURL : photo} )
    }

    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogoutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setLoader(false)
            } else {
                setUser(null)
                setLoader(false)
              
            }
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const ObjInfo = {
        name: 'majidul',
        SignUpUser,
        LoginUser,
        LogoutUser,
        googleLogin,
        setUser,
        user,
        userProfleUpdate,
        loader,
    }

    return (

        <AuthProvider.Provider value={ObjInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Provider;