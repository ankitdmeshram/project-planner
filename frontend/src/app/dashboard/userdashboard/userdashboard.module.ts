import { NgModule } from '@angular/core';
import { UserDashboardRoutingModule } from './userdashboard-routing.module';
import { UserdashboardComponent } from './userdashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { FeedsComponent } from './feeds/feeds.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';

@NgModule({
  declarations: [
    UserdashboardComponent,
    AnalyticsComponent,
    ProjectsComponent,
    UsersComponent,
    FeedsComponent,
    ProjectDetailsComponent,
    HeaderComponent,
    SidebarComponent,

  ],
  imports: [
    UserDashboardRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [UserdashboardComponent]
})
export class UserDashboardModule { }
