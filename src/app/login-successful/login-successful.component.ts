import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../data-service/database.data-service';

@Component({
  selector: 'app-login-successful',
  templateUrl: './login-successful.component.html',
  styleUrls: ['./login-successful.component.css']
})
export class LoginSuccessfulComponent implements OnInit {

  constructor(private databaseService:DatabaseService) { }
  users;
  ngOnInit() {
    this.getData();
  }
  getData(){
    let usersSub = this.databaseService.getUsers().subscribe(data => {
      usersSub.unsubscribe();

      this.users=data;
      console.log(this.users);
    })
  }
    deleteUser(name)
    {
      let deleteSub=this.databaseService.deleteUser(name).subscribe(data=>{
        if(data['result'])
        {
          alert("User deleted successfully "+name);
        }
        deleteSub.unsubscribe();
        this.ngOnInit();
      })
    }

}
