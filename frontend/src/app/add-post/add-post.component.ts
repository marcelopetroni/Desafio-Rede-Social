import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.sass'
})
export class AddPostComponent {

  constructor(private postService: PostService) {}
  
  onTitleChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.postService.updatePostTitle(inputElement.value);
  }

  onContentChange(event: Event) {
    const textareaElement = event.target as HTMLTextAreaElement;
    this.postService.updatePostContent(textareaElement.value);
  }
}
