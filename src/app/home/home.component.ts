import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../data-service/database.data-service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private databaseService:DatabaseService,private router:Router) { }

  ngOnInit() {
  }

  loginControl = new FormControl(null, Validators.required);
  passwordControl = new FormControl(null, Validators.required);
  signupForm = new FormGroup({ login: this.loginControl, password: this.passwordControl });

  login(form: NgForm) {
    let loginSub = this.databaseService.getUser(this.signupForm.value.login,this.signupForm.value.password).subscribe(data => {
      loginSub.unsubscribe()

      if (data.result) {
        localStorage.setItem('userLogged', "true");
        alert('Login successful');
        this.router.navigateByUrl('login-successful');
      }
      else {
        alert('Wrong password');
      }
    })

  }

}
