import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../userdashboard.component.css', './header.component.css']
})
export class HeaderComponent {
  userName: string = ''
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  showProfileSet:boolean = false;

  signOut = () => {
    this.auth.signOut()
    .then(() => {
      this.toastr.success("Sign Out Succesfully");
      this.router.navigate(['../'])
    })
  }

}
