import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestInterceptor } from './interceptor/test.interceptor';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    ViewPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
