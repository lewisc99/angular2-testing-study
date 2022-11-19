import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { delay, of } from 'rxjs';
import { DataService } from './data.service';
import { Post } from './post.model';
describe('mock http request: DataService', async() =>
{
    let service: DataService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    const dummyPosts:Post[] = [
        {userId:'1', id:1, body:'Hello world', title:'Testing'},
        {userId:'2', id:2, body:'Hello world', title:'Testing'},
      ]
      
      
    const dummyPosts2:Post[] = [
        {userId:'1', id:1, body:'Hello world', title:'Testing'},
        {userId:'2', id:2, body:'Hello world', title:'Testing'},
        {userId:'2', id:2, body:'Hello world', title:'Testing'},
      ]
      

    beforeEach(() =>
    {
        httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
        service = new DataService(httpClientSpy);
    });

    describe('getPosts()', () =>
    {
        it('should return expected posts when getPosts is called', () =>
        {
                httpClientSpy.get.and.returnValue(of(dummyPosts));

                service.getPosts().subscribe({
                    next: (posts) =>
                    {
                        expect(posts).toEqual(dummyPosts);
                    },
                    error: () => {}
                });
                expect(httpClientSpy.get).toHaveBeenCalledTimes(1); //to be called only 1 time
        });

        it('getPosts() using mock of TestBed',  () =>
        {
            TestBed.configureTestingModule({
                imports:[HttpClientTestingModule],
                providers:[DataService]
          
              });
              // service = TestBed.inject(DataService);
              service = TestBed.get(DataService);
    
             spyOn(service, 'getPosts').and.callFake(() =>
              {
                return of(dummyPosts).pipe(delay(300));
              });
    
              service.getPosts().subscribe({
                next: (posts) =>
                {
                    expect(posts).toEqual(dummyPosts);
                }
              });
    
        });


        it('getPosts() using mock of TestBed part 2',  () =>
        {
            TestBed.configureTestingModule({
                imports:[HttpClientTestingModule],
                providers:[DataService]
          
              });
              // service = TestBed.inject(DataService);
              service = TestBed.get(DataService);
    
             spyOn(service, 'getPosts').and.returnValue(of(dummyPosts))
    
              service.getPosts().subscribe({
                next: (posts) =>
                {
                    expect(posts).toEqual(dummyPosts);
                }
              });
    
        });


    });
    

})