import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  buttonLogin: boolean;
  buttonHome: boolean;
  buttonLogout: boolean;
  buttonRegister: boolean;

  constructor(private router:Router) { }

  logout() {
    localStorage.setItem('userLogged','false');
    this.router.navigateByUrl('home');
    this.checkButtons();
  }

  checkButtons() {
    
    let check=localStorage.getItem('userLogged');
    
    console.log(check);
    if(check=='true')
    {
      this.buttonLogin = false; this.buttonLogout = true,this.buttonRegister=false;  this.buttonHome = true; 
  
      
    }
    else
    {
       this.buttonLogin = true; this.buttonLogout = false,this.buttonRegister=true; this.buttonHome = true; 
  
    }
  }

  ngOnInit() {
    this.checkButtons();
  }

}
