import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';

import { ClrInputModule, ClrPasswordModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { ContextService } from './context.service';
import { CommonModule } from '@angular/common';
import { PickjobSelectionComponent } from './pickjob-selection/pickjob-selection.component';
import { PickjobDetailComponent } from './pickjob-detail/pickjob-detail.component';

const ROOT_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'pickjobs',
    component: PickjobSelectionComponent,
  },
  {
    path: 'pickjobs/:pickjobId',
    component: PickjobDetailComponent,
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
    PickjobSelectionComponent,
    PickjobDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(ROOT_ROUTES),
    ClrInputModule,
    ClrPasswordModule,
    FormsModule,
  ],
  providers: [ContextService],
  bootstrap: [AppComponent],
})
export class AppModule {}
