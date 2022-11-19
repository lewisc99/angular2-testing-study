import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public ROOT_URL = "http://jsonplaceholder.typicode.com";
  constructor(private http:HttpClient) { }

  getPosts()
  {
     return this.http.get<Post[]>(`${this.ROOT_URL}/posts`);
  }

  public addPost(post:Post)
  {
    const headers = new HttpHeaders();
    return this.http.post(this.ROOT_URL + '/posts', post, {headers});
  }

  deletePost(post:Post) {
    return this.http.delete(
      this.ROOT_URL + '/' + post.id
    );
  }
}
