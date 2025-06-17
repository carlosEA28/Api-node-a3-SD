import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase/firebaseApp.js";
import { criaJwt } from "./jwtService.js";

export async function loginFirebase(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const jwt = await criaJwt({ uid: user.uid, email: user.email });

    return { jwt, email: user.email };
  } catch (error) {
    throw new Error(error.message);
  }
}
