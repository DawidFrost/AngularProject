import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm, AbstractControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { DatabaseService } from '../data-service/database.data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private fb: FormBuilder,private databaseService:DatabaseService,private router:Router) { }


  public userData = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.pattern('^[0-9-+()]*$')],
    password: ['', Validators.required], 
    confirmPass: ['', Validators.required],
    pet: ['dog', Validators.required],
    address: this.fb.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        building: ['', Validators.required],
        flatNo: ['', Validators.pattern('^[0-9]*$')]
    }),
    consents: this.fb.group({
     newsletter: [false, Validators.required],
     sms: [false]
   })
   }, {
     validator: passwordMatcher
   });

  ngOnInit() { const phone = this.userData.get('phone');
  phone.valueChanges.pipe(debounceTime(500)).subscribe(value => {
    if ((phone.touched || phone.dirty) && phone.getError('pattern') || phone.value === '') {
     document.getElementById('smsDiv').style.display = 'none';
    } else {
    document.getElementById('smsDiv').style.display = 'block';
    }
  })
}

onSubmit(data: NgForm) {

  const user: RegisteredUser = { 
    name: data.value.name,
    surname: data.value.surname,
    email: data.value.email,
    phone: data.value.phone,
    password: data.value.password,
    pet: data.value.pet,
    address: {
      city: data.value.address.city,
      street: data.value.address.street,
      flatNo: data.value.address.flatNo,
      building: data.value.address.building
    },
    consents: {
      newsletter: data.value.consents.newsletter,
      sms: data.value.consents.sms
    }
  };
 
  console.log(user);

  this.databaseService.addUser(user.email,user.password).subscribe(data => {
    console.log(data['result']);
   if(data['result'])
   {
     alert("Successful registration, your login:"+user.email);
     this.router.navigateByUrl('home');
   }
   else alert("Login failed, username exists");
  
});

}


}
function passwordMatcher(c: AbstractControl): {[key: string]: boolean}|null {
  const password = c.get('password');
  const confirmPass = c.get('confirmPass');
   if (password.value === confirmPass.value) {
    return null;
  }
  if (password.pristine || confirmPass.pristine) {
    return null;
  }
 
  return{matchPasswords: true};

}
