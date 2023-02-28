import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserdashboardComponent } from './userdashboard.component';


const routes: Routes = [
  {
    path: '',
    component: UserdashboardComponent,
    children: [
      {
        path: '',
        component: AnalyticsComponent
      },
      {
      path: 'projects',
      component: ProjectsComponent
      },
      {
      path: 'project/:id',
      component: ProjectDetailsComponent
      }
  ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
