
export class AuthClass {

  constructor() { }

  public isAuthenticated():boolean
  {
    //returns true if has a token store in the browser.
    return !!localStorage.getItem('token');

  }
}
