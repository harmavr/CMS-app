import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserResolver } from './service/user.resolver';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'posts', component: PostsComponent},
  { path : 'users', component: UsersComponent},
  { path : 'user/:id', component: UserComponent, resolve: { resolvedResponse: UserResolver}},
  { path : '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
