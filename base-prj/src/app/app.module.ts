import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { UsersService } from './users.service';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [UsersService,PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
