import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Event, NavigationEnd } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  isAddPostRoute: boolean = false;

  constructor(private router: Router, private postService: PostService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isAddPostRoute = this.router.url === '/newPost';
      }
    });
  }

  navigateToFeed() {
    this.router.navigate(['/feed']);
  }
  publishPost() {
    this.postService.publishPost();
  }
}
