import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { SearchComponent, HomeComponent, AppRoutingModule } from './components/routing/routes.component';
import { SquarePipe } from './pipes/square/square.pipe';
import { LoginComponent } from './components/login/login.component';
import { HoverFocusDirective } from './directives/hover-focus.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './components/user-login/user-login.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    SearchComponent,
    HomeComponent,
    SquarePipe,
    HoverFocusDirective,
    UserLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
