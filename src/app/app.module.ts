import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { UsersComponent } from './users/users.component';
import { VideoListService } from './shared/video-list.service'

@NgModule({
  declarations: [
    AppComponent,
    AddVideoComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [VideoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
