import { Component, OnInit } from '@angular/core';
import { VideoListService } from './../shared/video-list.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  videoData: {}[];
  activeVideo: any;

  constructor(private videoListServie: VideoListService) {
    this.videoData = videoListServie.getVideos();
  }

  ngOnInit() {
  }

  setActiveVideo(videoEvent) {
    this.activeVideo = videoEvent;
  }

}
