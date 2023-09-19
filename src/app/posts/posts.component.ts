import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Post } from '../interface/post';
import { PostService } from '../service/post.service';
import { HttpEventType } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[]
  showValidationsErros:boolean = false
  fileToUpload: File | null;
  imageUrl: string | null;
  

  constructor(private postService: PostService){}

  ngOnInit(): void {
    this.posts = this.postService.getAllposts();
  }

  onFileSelected(event: any) {
    const inputElement = event.target as HTMLInputElement;
    this.fileToUpload = inputElement.files?.[0];
    this.imageUrl = URL.createObjectURL(this.fileToUpload);
  }

    onSubmit(form: NgForm) {
      if (form.invalid) { 
        return this.showValidationsErros = true; 
      }
      console.log(form)
      this.postService.addPost({
        title: form.value.title,
        content: form.value.content,
        image: this.imageUrl
      }
      )
      form.reset();
      this.imageUrl = null;
      return this.showValidationsErros = false;
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