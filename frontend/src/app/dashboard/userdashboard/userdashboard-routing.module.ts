import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { UserdashboardComponent } from './userdashboard.component';


const routes: Routes = [
  {
    path: '',
    component: UserdashboardComponent,
    children: [
      {
      path: 'projects',
      component: ProjectsComponent
    }
  ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
