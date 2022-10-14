import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsResolver } from './posts.resolver';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    resolve: { posts: PostsResolver },
  },
  {
    path: 'add',
    component: AddPostComponent,
  },
  {
    path: 'edit/:id',
    component: EditPostComponent,
    resolve: { posts: PostsResolver },
  },
  {
    path: 'details/:id',
    component: SinglePostComponent,
    resolve: { posts: PostsResolver }, //para que cuando refresque la pagina
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
