import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../auth.component.css','./reset-password.component.css']
})
export class ResetPasswordComponent {

  constructor(private auth: AuthService,
    private toastr: ToastrService
    ) {

  }

  resetPassword = new FormGroup({
    email: new FormControl('', Validators.required)
  })

  resetPass = () => {
    this.auth.resetPass(this.resetPassword.value)
    .then((res) => {
      this.toastr.success("Password Reset Link Shared Successfully")
    })
  }

}
