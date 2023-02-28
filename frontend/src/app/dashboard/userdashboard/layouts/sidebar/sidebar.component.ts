import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProjectService } from 'src/app/services/projects/project.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../userdashboard.component.css', './sidebar.component.css']
})
export class SidebarComponent {

  userEmail = "";
  projects:any = []
  constructor(
    private project: ProjectService,
    private auth: AuthService
  ) {
    this.auth.getUser().then((res:any) => {
      this.userEmail = res.email;
      this.viewProject();
    })
  }

  viewProject = () => {
    this.project.Project({email: this.userEmail})
    .subscribe((res:any) => {
      this.projects = res;
    })
  }
  
}
