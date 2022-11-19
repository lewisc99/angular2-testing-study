import { SquarePipe } from './square.pipe';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

describe('SquarePipe', () => {
  
  let pipe: SquarePipe;

  beforeEach(async () => {

    TestBed.configureTestingModule({

      declarations: [SquarePipe],
      imports: [FormsModule]
    })
    .compileComponents();

    pipe = new SquarePipe();
  })
  
  it('create an instance', () => {
    // const pipe = new SquarePipe();

    expect(pipe).toBeTruthy();
  });


  it('Should check pipe transforms the number into its square', () =>
  {
    expect(pipe.transform(10)).toBe(100);
  });

  
  it('Should check pipe its not a number', () =>
  {
    expect(pipe.transform('10a')).toBe('not a number');
  });


});
