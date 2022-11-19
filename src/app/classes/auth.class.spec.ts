import { AuthClass } from './auth.class';
describe('class: Auth', () =>
{
    let authClass:AuthClass | null;

    beforeEach(() => {
        authClass = new AuthClass();
    });


    afterEach(() =>
    {
        authClass = null;
        localStorage.removeItem('token');
    });

    it('should return true from isAuthenticated when there is a token', () =>
    {
        localStorage.setItem('token','1234');
        expect(authClass?.isAuthenticated()).toBeTruthy();
    })

    it('should return false from isAuthenticated when there is no token', () =>
    {
        expect(authClass?.isAuthenticated()).toBeFalsy();
    })
})