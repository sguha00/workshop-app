import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Video } from './video'

const API_URL = 'http://localhost:8085/videos';

@Injectable()
export class VideoListService {

  constructor(private http: Http) { }

  load(): Observable<Video[]> {
    return this.http.get(API_URL).map(res => res.json());
  }

}
