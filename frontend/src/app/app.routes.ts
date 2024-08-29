import { Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddPostComponent } from './add-post/add-post.component';

export const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'newPost', component: AddPostComponent },
  { path: '', redirectTo: '/feed', pathMatch: 'full' },  
  
];