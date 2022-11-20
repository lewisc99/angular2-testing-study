import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginComponent } from './user-login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../../services/authservice/auth.service';

fdescribe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginComponent ],
      imports: [ReactiveFormsModule,FormsModule],
      providers: [AuthService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.debugElement.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
    component.ngOnInit();
  });

    it('user is loggedIn should return true',() =>
    {

      spyOn(component,"userLogin").and.callFake(() => {
        return true;
        //here you can add a return a observable simulating a response from the request.
        // as return of([]).pipe(delay(300));
      });

      //or could be
      // spyOn(component,"userLogin").and.returnValue(true);
      expect(component.userLogin()).toEqual(true);

    });

    it('user use a invalid login',() =>
    {

       let hub = authService.userLogin("luizgmail.com","12345678");
        expect(hub).toBe(false);

    });

    it('user use a valid login',() =>
    {

       let hub = authService.userLogin("luiz@gmail.com","12345678");
        expect(hub).toBe(true);

    });




  it('form invaid when empty', () => {
   
    //because component.form.valid is not filled.
    expect(component.form.valid).toBeFalsy();

  });

  it('email field is validity',() =>
  {
      let email = component.form.controls['email']; //because email field is not filled.
      expect(email.valid).toBeFalsy();

      let errors:any = email.errors;

      expect(errors['required']).toBeTruthy();


      email.setValue("");
      errors = email.errors;
      expect(errors['required']).toBeTruthy();

  });

  it('valid email filled', () =>
  {

    let email = component.form.controls['email'];

    expect(email.valid).toBeFalsy();

    email.setValue("luiz@gmail.com");

    expect(email.valid).toBeTruthy();

  });

  it('submtting a form emits a user', () =>
  {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['email'].setValue('test@test.com');
    component.form.controls['password'].setValue('123456789');
    expect(component.form.valid).toBeTruthy();

    spyOn(component,'Login').and.returnValue(true);
    expect(component.Login()).toEqual(true);
  });



});
