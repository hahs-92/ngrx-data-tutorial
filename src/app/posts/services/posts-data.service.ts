import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Post } from '../../models/post.model';
import { Update } from '@ngrx/entity';

@Injectable()
export class PostsDataService extends DefaultDataService<Post> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Post', http, httpUrlGenerator);
  }

  override getAll(): Observable<Post[]> {
    return this.http
      .get('https://vue-completecourse.firebaseio.com/posts.json')
      .pipe(
        map((data: any) => {
          const posts: Post[] = [];
          for (let key in data) {
            posts.push({ ...data[key], id: key });
          }
          return posts;
        })
      );
  }

  override add(post: Post): Observable<Post> {
    return this.http
      .post<{ name: string }>(
        'https://vue-completecourse.firebaseio.com/posts.json',
        post
      )
      .pipe(
        map((data) => {
          return { ...post, id: data.name };
        })
      );
  }

  override update(post: Update<Post>): Observable<Post> {
    return this.http.put<Post>(
      `https://vue-completecourse.firebaseio.com/posts/${post.id}.json`,
      { ...post.changes }
    );
  }

  override delete(postId: string): Observable<string> {
    return this.http
      .delete<Post>(
        `https://vue-completecourse.firebaseio.com/posts/${postId}.json`
      )
      .pipe(map((data) => postId));
  }
}
