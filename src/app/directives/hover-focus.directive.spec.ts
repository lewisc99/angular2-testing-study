import { Component, DebugElement } from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HoverFocusDirective } from './hover-focus.directive';

@Component({
  template: `<input type="text" class="input" hoverfocus id="input">`
})
class TestHoverFocusComponent {
}

let component: TestHoverFocusComponent;
let fixture: ComponentFixture<TestHoverFocusComponent>;
let inputEl: DebugElement;

describe('Directive: HoverFocus', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoverFocusDirective,TestHoverFocusComponent]
    });


    fixture = TestBed.createComponent(TestHoverFocusComponent); 
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('.input'));

  });

  it('hovering over input', () => {
    inputEl.triggerEventHandler('mouseover', null); 
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('blue'); 
  
    inputEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    console.log(inputEl.nativeElement.style.backgroundColor);
    expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  });

});