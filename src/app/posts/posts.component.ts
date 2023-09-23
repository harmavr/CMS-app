import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post';
import { PostService } from '../service/post.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[]
  showValidationsErros:boolean = false
  imageUrl: string;

  constructor(private postService: PostService) {}

  ngOnInit(): void {

  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
    }

  onSubmit(form: NgForm) {
    if (form.invalid) { 
      return this.showValidationsErros = true; 
    }

    form.value.image = this.imageUrl
    this.postService.addPost(form.value
    )
    form.reset();
    this.imageUrl = null;
    return this.showValidationsErros = false;
    }
}
