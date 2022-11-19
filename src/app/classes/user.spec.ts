import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });

  it('should test the method sum', () =>
  {
      let user = new User();

    expect(user.sum(20,10)).toEqual(30);
  })
  
});
