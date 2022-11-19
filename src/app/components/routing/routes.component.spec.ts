import { Router } from "@angular/router";
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HomeComponent, routes, SearchComponent } from './routes.component';
import { AppComponent } from '../../app.component';
import { RouterTestingModule } from '@angular/router/testing';
import {Location} from "@angular/common";


describe('Router: App', () =>
{
    let location:Location;
    let router: Router;
    let fixture: ComponentFixture<AppComponent>;;

    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent,
                SearchComponent,
                AppComponent,
              
            ],

            imports: [
                RouterTestingModule.withRoutes(routes)
            ]
        });

        router = TestBed.get(Router); //grab a reference from the injected router. from our testbed.
        location = TestBed.get(Location); //also in here 
        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    });

    it('navigate to "" redirects you to /home', fakeAsync(() =>
    {
        router.navigate(['']);
        tick();
        expect(location.path()).toBe('/home');
    }));

    it('navigate to "search" takes you to /search', fakeAsync(() =>
    {
        router.navigate(['search']);
        tick();
        expect(location.path()).toBe('/search');
    }));

})