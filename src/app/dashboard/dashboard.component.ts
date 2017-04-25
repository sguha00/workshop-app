import { Component, OnInit } from '@angular/core';
import { VideoListService } from './../shared/video-list.service'
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Video } from './../shared/video'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  videoData: Observable<Video[]>;
  activeVideo: any;
  dateInput: FormControl;

  constructor(private videoListService: VideoListService) { }

  ngOnInit() {
    this.dateInput = new FormControl('');
    this.videoData = this.videoListService.load();
  }

  setActiveVideo(videoEvent) {
    this.activeVideo = videoEvent;
  }

}
