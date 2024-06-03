import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "./firebase";

const auth = getAuth(firebaseApp);

export const handleSignup = async (email, password) => {
  try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User ID:", user?.uid);
        return user?.uid;
    } catch (error) {
        console.error("Signup error:", error);
        throw error; 
    }
};
