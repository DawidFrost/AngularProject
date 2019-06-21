import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { InputTrimModule } from 'ng2-trim-directive';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginSuccessfulComponent } from './login-successful/login-successful.component';
import { DatabaseService } from './data-service/database.data-service';
import { StartpageComponent } from './startpage/startpage.component';
import { appTextColorDirective } from './text-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    HomeComponent,
    NavBarComponent,
    LoginSuccessfulComponent,
    StartpageComponent,
    appTextColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputTrimModule,
    HttpClientModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
