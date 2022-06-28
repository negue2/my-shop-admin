import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';

import { ClrInputModule, ClrPasswordModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { FacilitySelectionComponent } from './facility-selection/facility-selection.component';
import { ContextService } from './context.service';

const ROOT_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'facility-selection',
    component: FacilitySelectionComponent
  },
  {
    path: 'nx-welcome',
    component: NxWelcomeComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    LoginFormComponent,
    FacilitySelectionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROOT_ROUTES),
    ClrInputModule,
    ClrPasswordModule,
    FormsModule,
  ],
  providers: [ContextService],
  bootstrap: [AppComponent],
})
export class AppModule {}
