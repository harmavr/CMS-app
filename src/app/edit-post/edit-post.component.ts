import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Post } from '../interface/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  imageUrl: string = '';

  constructor(
    public dialogRef: MatDialogRef<EditPostComponent>,
    @Inject(MAT_DIALOG_DATA) public post: Post,
    public postService: PostService
  ) {}

  ngOnInit(): void {
    this.imageUrl = this.post.image;
  }

  onEditPost(form: NgForm) {
    console.log("onEdit")
    const updatedPost = {
      title: form.value.title,
      content: form.value.content,
      image: !form.value.image ? this.post.image : this.imageUrl,
    };
    console.log(updatedPost)

    this.dialogRef.close(updatedPost);
  }

  close() {
    this.dialogRef.close();
    console.log(this.dialogRef.close);
  }

  onFileSelected(event: Event) {
     
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();

    if (file) {
      this.imageUrl = URL.createObjectURL(file);
    }
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
