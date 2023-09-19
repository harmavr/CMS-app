import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { Post } from '../interface/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {

  posts: Post[]
  constructor(private postService: PostService) {}

ngOnInit(): void {
  this.posts = this.postService.getAllposts();
}
  isEmpty(): boolean {
    if (this.posts.length > 0){
      return true
    }
    else {
      return false
    }
  }

  deletePost(post: Post ) {
    const index = this.posts.indexOf(post)
    this.postService.deletePost(index)
  }
}
