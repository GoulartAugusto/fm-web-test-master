import firebase_app from "../../firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);


export default async function signUp(email, username, password, pronouns1, pronouns2) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, username, password, pronouns1, pronouns2);
    } catch (e) {
        error = e;
    }

    return { result, error };
}