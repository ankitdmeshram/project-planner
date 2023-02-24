import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.css', './register.component.css']
})
export class RegisterComponent {

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ){}

  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  register = () => {
    this.auth.signUp(this.registerForm.value)
    
  }
}
