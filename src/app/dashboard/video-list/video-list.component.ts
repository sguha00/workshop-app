import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videos: {}[];
  @Output() selectedVideo = new EventEmitter();

  constructor(private title: Title) { }
  ngOnInit() {
  }

  select(video) {
    this.title.setTitle(video.title);
    this.selectedVideo.emit(video);
  }

}
