import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
  ) { }

  signIn = (val: any) => {
    const { email, password } = val;
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signUp = (val: any) => {
    const { email, password } = val;
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  resetPass = (val:any) => {
    const { email} = val;
    return this.auth.sendPasswordResetEmail(email);
  }

  getUser = () => {
    return this.auth.currentUser
  }   

}
