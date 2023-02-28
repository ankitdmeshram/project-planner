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
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

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
    CommonModule,
    HttpClientModule,
    AngularEditorModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [UserdashboardComponent]
})
export class UserDashboardModule { }
