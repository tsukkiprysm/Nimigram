import {auth, db} from "../firebase/firebase.js"
import {useEffect, useState, createContext, useContext} from "react"
import {onAuthStateChanged} from "firebase/auth";
import {doc, onSnapshot} from "firebase/firestore";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userProfile, setUserProfile] = useState(null);
    const [profileUid, setProfileUid] = useState(null)

    const uid = currentUser ? currentUser.uid : null;

    useEffect(() => {
        //equivalente ao unsubscribe, já que o ide tava me dizendo que a variável era redundante
        return onAuthStateChanged(auth, initializeUser);
    }, []);

    useEffect(() => {
        if (!uid) {
            setUserProfile(null);
            setProfileUid(null);
            return;
        }

        //ouvinte
        return onSnapshot(
            //referencia na db
            doc(db, 'users', uid),
            //função de sucesso
            (snapshot) => {
                setUserProfile(snapshot.exists() ? snapshot.data() : null);
                setProfileUid(uid);
            },
            //função de erro
            (error) => {
                console.error('Erro ao ler o perfil:', error);
                setUserProfile(null);
                setProfileUid(uid);
            }
        );
    }, [uid]);

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({ ...user });
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const profileLoading = uid !== null && profileUid !== uid;

    console.log(currentUser);
    console.log(uid);
    console.log('UserProfile contexto: ' + userProfile);
    console.log(profileUid);
    console.log('ProfileLoading contexto: ' + profileLoading);
    console.log('UserLoggedIn contexto: ' + userLoggedIn);

    const value = {
        currentUser,
        userLoggedIn,
        loading,
        userProfile,
        profileLoading
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}