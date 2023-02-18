import { NgModule } from '@angular/core';
import { UserDashboardRoutingModule } from './userdashboard-routing.module';
import { UserdashboardComponent } from './userdashboard.component';

@NgModule({
  declarations: [
    UserdashboardComponent,

  ],
  imports: [
    UserDashboardRoutingModule
  ],
  providers: [],
  bootstrap: [UserdashboardComponent]
})
export class UserDashboardModule { }
