import { Injectable } from '@angular/core';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  auth = getAuth();

  signIn = () => {
    let email = '';
    let password = ''
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredentials) => {
        alert("Logged In Succefully");
      })
      .catch((error) => {
        console.log(error);
        alert("Logged In Failes..")
      })
  }

  signUp = () => {
    let email = '';
    let password = '';
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((res) => {
        alert("User Registered Succesffuly");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong" + error);
      })
  }

  resetPass = () => {
    let email = '';
    return sendPasswordResetEmail(this.auth, email)
      .then((res) => {
        console.log(res);
        alert("Code Sent");
      })
      .catch((err) => {
        alert("Something went wrong");
      })
  }
}
