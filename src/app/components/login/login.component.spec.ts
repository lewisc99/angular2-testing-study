import { AuthService } from 'src/app/services/authservice/auth.service';
import { LoginComponent } from './login.component';




describe('Component: Login',async () => {
  let component: LoginComponent |null;
  let service:  AuthService ;


  beforeEach(() =>
  {
      service = new AuthService();
      component = new LoginComponent(service);
  })
 
  afterEach(() =>
  {
    component = null;
   })

   

  it('canLogin returns false when the user is not authenticated', () => {

    //service, function isAuthenticated, and return a value to false;
    // let spy = spyOn<AuthService,any>(service,'isAuthenticated').and.returnValue(false);
     spyOn(service, 'isAuthenticated').and.returnValue(false);


      expect(component?.needsLogin()).toBeTruthy();
      expect(service.isAuthenticated).toHaveBeenCalled();
  });


  it('canLogin returns false when the user is not authenticated', () => {

   spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(component?.needsLogin()).toBeFalsy();
});


});
