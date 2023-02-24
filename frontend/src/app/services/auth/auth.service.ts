import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = "http://localhost:3000"

  constructor(
    private auth: AngularFireAuth,
    private toastr: ToastrService,
    private http: HttpClient,
    private router: Router


    ) { }

  signIn = (val: any) => {
    const { email, password } = val;
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signUp = (val: any) => {
    const { email, password } = val;
    return this.auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      this.http.post(`${this.url}/signup`, email).subscribe((res) => {
        console.log(res)
      })

      this.toastr.success("Registered Successfull");
      this.router.navigate(['/dashboard'])
    })
    .catch(() => {
      this.toastr.warning("Registered Failed")
    })
  }

  resetPass = (val: any) => {
    const { email } = val;
    return this.auth.sendPasswordResetEmail(email);
  }

  getUser = () => {
    return this.auth.currentUser
  }

  signOut = () => {
    return this.auth.signOut();
  }

}
