import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('User Inside State Change', currentUser);
            setUser(currentUser)
        });

        return () => {
            unsubscribe();
        }
    } , [])

    const AuthInfo = {user, googleLogin}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;