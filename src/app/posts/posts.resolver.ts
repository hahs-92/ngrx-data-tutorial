import { Injectable } from '@angular/core';
import { mergeMap, map, of, first, tap } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from './services/post.service';

//este resolve lo agregamos en el app.routing y el app.module
@Injectable()
export class PostsResolver implements Resolve<boolean> {
  constructor(private postService: PostService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.postService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          //internamente lansa una accion
          //y se encarga de actualizar el estado por nosotros
          this.postService.getAll();
        }
      }),
      first()
    );
  }
}
