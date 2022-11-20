import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated():boolean
  {

    //returns true if has a token store in the browser.
    return !!localStorage.getItem('token');

  }

  public userLogin(email:string, password:string):boolean
  {
    if(email == "luiz@gmail.com" && password  == "12345678")
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  
}
