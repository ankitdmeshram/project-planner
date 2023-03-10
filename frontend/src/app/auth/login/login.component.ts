import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.css', './login.component.css']
})
export class LoginComponent {

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {

  }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  signIn = () => {
    this.spinner.show()
    this.auth.signIn(this.loginForm.value)
    .then(() => {
      this.toastr.success("Logged In Successfull");
      this.router.navigate(['/dashboard'])
      this.spinner.hide()
    })
    .catch(() => {
      this.toastr.warning("Logged In Failed")
      this.spinner.hide()
    })
  }

}
