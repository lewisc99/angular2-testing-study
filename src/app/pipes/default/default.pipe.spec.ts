import { DefaultPipe } from './default.pipe';

describe('DefaultPipe', () => {


  let pipe: DefaultPipe;

  beforeEach(() => {
    pipe  = new DefaultPipe();
  });


  it('providig no value retuns fallback', () => {

    expect(pipe.transform('','http://place-hold.it/300'))
    .toBe('http://place-hold.it/300')
    
  });
});
