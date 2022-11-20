import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/authservice/auth.service';

type NewType = FormGroup;

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{

  form!:FormGroup;

  constructor( private fb:FormBuilder, private authService: AuthService){}

  ngOnInit(): void {

    this.form = this.fb.group({
      email:["", [Validators.required, Validators.pattern("[^ @]*@[^@]*")]],
      password: ["",[Validators.required, Validators.minLength(8) ]]
    });
  }

  Login()
  {
    console.log(`Login ${JSON.stringify(this.form.value) }`);
    if (this.form.valid)
    {
      console.log("user LoggedIn");
      return true;
    }
    return false;
  }

  userLogin()
  {
    if (this.form.valid)
    {
      return  this.authService.userLogin(this.form.controls["email"].value,this.form.controls["password"].value)
    }
    else
    {
      return false;
    }
  }

  

}
