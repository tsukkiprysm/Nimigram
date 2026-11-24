import { auth } from "./firebase.js"
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    sendPasswordResetEmail,
    updatePassword,
    sendEmailVerification} from "firebase/auth"

export const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email,password);
}

export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const loginGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();

        // Serve para forçar a app a pedir o login novamente ao voltar à app
        provider.setCustomParameters({prompt: "select_account"});

        const result = await signInWithPopup(auth, provider);

        const user = result.user;

        console.log("Nome:", user.displayName);
        console.log("Email:", user.email);
        console.log("Foto:", user.photoURL);
        console.log("UID:", user.uid);
    } catch (error) {
        console.log("Erro:", error.message);
    }
}

export const logout = () => {
    return auth.signOut();
}

/* export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
}

export const doUpdatePassword = (password) => {
    return updatePassword(auth.currentUser, password);
}

export const doSendEmailVerification = () => {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/home`,
    });
} */
