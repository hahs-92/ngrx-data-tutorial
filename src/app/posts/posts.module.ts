import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';

import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsResolver } from './posts.resolver';
import { PostsDataService } from './services/posts-data.service';
import { SinglePostComponent } from './single-post/single-post.component';

//
const entityMetadata: EntityMetadataMap = {
  Post: {
    // sortComparer
    // entityName //para cuando hay mas d euna entity
    //podemos agregar opciones de optimizacion
    entityDispatcherOptions: {
      //indica que actualiza el store al mismo tiempo que hace el
      //llamdo a la api, es decir no espera hasta que la api responda 200,
      // para hacer el update
      optimisticUpdate: true,
    },
  },
};

@NgModule({
  declarations: [
    PostsListComponent,
    SinglePostComponent,
    EditPostComponent,
    AddPostComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    PostsRoutingModule,
  ],
  providers: [PostsDataService, PostsResolver],
})
export class PostsModule {
  constructor(
    eds: EntityDefinitionService,
    entityDataService: EntityDataService,
    postsDataService: PostsDataService
  ) {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Post', postsDataService);
  }
}
