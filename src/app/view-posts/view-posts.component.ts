import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post';
import { PostService } from '../service/post.service';
import { MatDialog } from '@angular/material/dialog';
import { EditPostComponent } from '../edit-post/edit-post.component';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {

  posts: Post[]
  constructor(private postService: PostService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.GetPosts()
  }

  GetPosts() {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.posts = response;
      },
      (error) => {
        console.log(error)
      },
      () => {
        console.log('done getting users')
      }
    )
  }
  
  isEmpty(): boolean {
    if (this.posts?.length > 0){
      return true
    }
    else {
      return false
    }
  }

  onDeletePost(post: Post) {
    this.postService.deletePost(post._id)
    this.GetPosts()
  }

  onEditPost(post: Post) {

    let dialogRef = this.dialog.open(EditPostComponent, {
      width: '1000px',
      height: '500px',
      data: post
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        
        this.postService.updatePost(post._id, result).subscribe(
          () => {
            this.GetPosts();
          }
        )
      }
    })
  }
}
