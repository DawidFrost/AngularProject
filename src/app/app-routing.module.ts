import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { LoginSuccessfulComponent } from './login-successful/login-successful.component';
import { StartpageComponent } from './startpage/startpage.component';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: 'register-form', component: RegisterFormComponent },
     { path: '', component: StartpageComponent },
     { path: 'home', component: HomeComponent },
     { path: 'login-successful', component: LoginSuccessfulComponent }   
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
