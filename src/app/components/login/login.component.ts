import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/authservice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {


  constructor(private auth:AuthService){}

  needsLogin()
  {
    return !this.auth.isAuthenticated();
  }
}
