import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videos: {}[];
  @Output() selectedVideo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  select(video) {
    this.selectedVideo.emit(video);
  }

}
