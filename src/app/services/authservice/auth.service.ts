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
}
