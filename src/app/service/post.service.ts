import { HttpClient, HttpEvent, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [];

  constructor(private http: HttpClient) { }


  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('image', file);

    return this.http.post('/upload', formData);
  }

  getAllposts() {
    return this.posts
  }

  addPost(post: Post) {
    this.posts.push(post)
  }
  
  updatePost(index: number, updatedPost: Post) {
      this.posts[index] = updatedPost
  }

  deletePost(index: number) {
      this.posts.splice(index, 1)
  }
}
