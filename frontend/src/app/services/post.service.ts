import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
})
export class PostService {
  private postTitle = new BehaviorSubject<string>('');
  private postContent = new BehaviorSubject<string>('');

  postTitle$ = this.postTitle.asObservable();
  postContent$ = this.postContent.asObservable();

  private apiUrl = 'http://localhost:3000/posts'; 

  constructor(private http: HttpClient) {}

  updatePostTitle(title: string) {
    this.postTitle.next(title);
  }

  updatePostContent(content: string) {
    this.postContent.next(content);
  }

  publishPost() {
    const postData = {
      title: this.postTitle.value,
      text: this.postContent.value
    };

    this.http.post(this.apiUrl, postData).subscribe({
      next: response => {
        console.log('Post criado com sucesso:', response);
        alert('Post realizado com sucesso!');
        window.location.reload(); 
      },
      error: error => {
        console.error('Erro ao criar post:', error);
      }
    });
  }
}
