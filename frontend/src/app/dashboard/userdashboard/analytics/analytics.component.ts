import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProjectService } from 'src/app/services/projects/project.service';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {

  projects: any = []
  barChartData: any;

  userEmail: string = "";
  projectCount: number = 0;
  openProjectCount: number = 0;
  closeProjectCount: number = 0;

  tasksCount: number = 0;
  openTaskCount: number = 0;
  closeTaskCount: number = 0;

  constructor(
    private project: ProjectService,
    private auth: AuthService,
    private spinner: NgxSpinnerService
  ) {
    spinner.show();
    this.auth.getUser().then((res: any) => {
      this.userEmail = res.email;
      this.viewProject();
    })
  }

  viewProject = () => {
    this.project.Project({ email: this.userEmail })
      .subscribe((res: any) => {
        this.projects = res;
        this.spinner.hide()

        this.projects.map((res:any) => {
          if(res.status == 'Open')
          {
            this.openProjectCount++;
          } else if(res.status == 'Completed')
          {
            this.closeProjectCount++;
          }
        })

        this.barChartData = {
          labels: ['Total Projects', 'Open Projects', 'Complted Projects'],
          datasets: [
            {
              data: [this.projects.length, 0, 0], 
            },
            {
              data: [0, this.openProjectCount, 0], 
            },
            {
              data: [0, 0, this.closeProjectCount], 
            },
          ]
        }

      })
  }

  
  
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };


}
