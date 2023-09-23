import { HttpClient, HttpEvent, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, } from '../interface/post';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../interface/response';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [];

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('image', file);

    return this.http.post('/upload', formData);
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Response>(`${this.baseUrl}/post/getAll`).pipe(
      tap(postsArray => {
        console.log('Posts array:')
      }),
      map(response => response.data.map(post => ({
        _id: post._id,
        title: post.title,
        content: post.content,
        image: post.image,
      })))
      
    );
  }


  addPost(post: Post) {
    this.http.post(`${this.baseUrl}/post/create`, post).subscribe(
      (data: any) => {
        console.log(data)
      }
       
    )
    
  }

  updatePost(index: number, updatedPost: Post) {
    return this.http.patch(`${this.baseUrl}/post/update/${index}`, updatedPost);
    // .subscribe(
    //   () => {
    //     // Handle the successful deletion here, such as removing the post from the local array.
    //     //this.posts.splice(index, 1);
    //     this.getAllPosts()
       
    //   },
      
    //   (error) => {
    //     console.error('Error:', error);
    //     // Handle the error if needed
    //   }
    // );
      //this.posts[index] = updatedPost
  }

  deletePost(index: number) {
    console.log(index)
    this.http.delete(`${this.baseUrl}/post/delete/${index}`).subscribe(
      () => {
        // Handle the successful deletion here, such as removing the post from the local array.
        this.posts.splice(index, 1);
        this.getAllPosts()
       
      },
      
      (error) => {
        console.error('Error:', error);
        // Handle the error if needed
      }
    );
    
  }
}
