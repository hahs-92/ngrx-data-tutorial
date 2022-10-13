import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//dependencias necesarias para ngrx-data
import {
  DefaultDataServiceConfig,
  EntityDataModule,
  EntityDataService,
} from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { entityConfig } from './entity-metadata';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { PostsDataService } from './posts/services/posts-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    SinglePostComponent,
    EditPostComponent,
    AddPostComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig), //debe ir despues de store y effects
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [PostsDataService], //ngData-service
  bootstrap: [AppComponent],
})
export class AppModule {
  //ng-data
  //registrar el servicio
  constructor(
    entityDataService: EntityDataService,
    postsDataService: PostsDataService
  ) {
    entityDataService.registerService('Post', postsDataService);
  }
}
