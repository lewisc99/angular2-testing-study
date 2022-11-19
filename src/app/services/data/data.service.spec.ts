import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule , HttpTestingController} from '@angular/common/http/testing';
import { Post } from './post.model';
import { HttpErrorResponse } from '@angular/common/http';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[DataService]

    });
    // service = TestBed.inject(DataService);
    service = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });





 it('should retrieve posts from the API via GET', () => {

    const dummyPosts:Post[] = [
      {userId:'1', id:1, body:'Hello world', title:'Testing'},
      {userId:'2', id:2, body:'Hello world', title:'Testing'},
    ]

    service.getPosts().subscribe(posts =>
      {
        expect(posts.length).toBe(2);
        expect(posts).toEqual(dummyPosts);
      })

  });

  it('should retrieve posts from the API via GET using mockController', () => {

    const dummyPosts:Post[] = [
      {userId:'1', id:1, body:'Hello world', title:'Testing'},
      {userId:'2', id:2, body:'Hello world', title:'Testing'},
    ]

    service.getPosts().subscribe(posts =>
      {
        expect(posts.length).toBe(2);
        expect(posts).toEqual(dummyPosts);
      });

      const request = httpMock.expectOne(`${service.ROOT_URL}/posts`);

      expect(request.request.method).toBe('GET'); //the request should be get;
      request.flush(dummyPosts); //will return this body 
  });


  it('should test HttpClient get', () => {

    const dummyPosts:Post[] = [
      {userId:'1', id:1, body:'Hello world', title:'Testing'},
      {userId:'2', id:2, body:'Hello world', title:'Testing'},
    ]
    service.getPosts().subscribe(posts =>
      {

          expect(dummyPosts).toBe(posts, 'should check mocked data');
      });

      const request = httpMock.expectOne(`${service.ROOT_URL}/posts`);

      expect(request.cancelled).toBeFalsy();
      expect(request.request.responseType).toEqual('json');

      request.flush(dummyPosts);

  });

    it('should add post and return added post',() =>
    {
      const newPost: Post = {id:101, userId:"1",title:'new Post', body:'Sample post body'};

      service.addPost(newPost).subscribe((addedPost) =>
      {
        expect(addedPost).toBe(newPost);
      });

      const req = httpMock.expectOne(service.ROOT_URL + "/posts");

      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toBe('json');
      expect(req.request.body).toEqual(newPost);

      req.flush(newPost);

    });

    it('should test 404 error', () =>
    {
      const errorMesg = 'mock 404 error ocurred';

      service.getPosts().subscribe(
        (data) => {
          fail('failing with error 404');
        },
        (error:HttpErrorResponse) =>
        {
          expect(error.status).toEqual(404);
          expect(error.error).toEqual(errorMesg);
        }
      );

      const req = httpMock.expectOne(service.ROOT_URL + "/posts");
      req.flush(errorMesg,{status:404,statusText:'Not Found'});
      
    });

    

    

});
