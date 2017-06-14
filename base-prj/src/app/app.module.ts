import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import {routing} from './routers/routers';
import { AppComponent } from './app.component';
import { UserListComponent } from 'app/users/users-list.component';
// import { PostsComponent } from 'app/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    // PostsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
