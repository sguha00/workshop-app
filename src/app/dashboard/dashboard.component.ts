import { Component, OnInit } from '@angular/core';
import { VideoListService } from './../shared/video-list.service'
import { FormBuilder, FormGroup } from '@angular/forms';
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
  filterForm: FormGroup;

  constructor(
    private videoListService: VideoListService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      startDate: []
    })
    this.filterForm.valueChanges.subscribe(val => console.log(val));

    this.videoData = this.videoListService.load();
  }

  setActiveVideo(videoEvent) {
    this.activeVideo = videoEvent;
  }

}
