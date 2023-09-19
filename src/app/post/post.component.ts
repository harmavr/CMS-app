import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Post } from '../interface/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
   @Output() deletePostEvent: EventEmitter<void> = new EventEmitter();
   @Output() editPostEvent: EventEmitter<void> = new EventEmitter();

  onPostDelete() {
    this.deletePostEvent.emit();
   }

   onPostEdit() {
    this.editPostEvent.emit()
   }
}
