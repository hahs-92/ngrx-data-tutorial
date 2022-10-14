import { Injectable } from '@angular/core';

import {
  DefaultDataServiceConfig,
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { Post } from '../../models/post.model';

// export const defaultDataServiceConfig: DefaultDataServiceConfig = {
//   root: 'https://vue-completecourse.firebaseio.com/posts.json',
//   timeout: 3000,
// };

@Injectable({
  providedIn: 'root',
})
export class PostService extends EntityCollectionServiceBase<Post> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Post', serviceElementsFactory);
  }
}
