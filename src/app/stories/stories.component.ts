import { Component, OnInit } from '@angular/core';
import { HackernewsApiService } from '../hackernews-api.service';

@Component( {
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
} )
export class StoriesComponent implements OnInit {
  items: number[];
  constructor(private hackernewsApi: HackernewsApiService ) {
    // this.items = Array( 30 );
    this.hackernewsApi.fetchStories().subscribe(stories => this.items = stories, error  => console.log(error));
  }

  ngOnInit() {

  }

}
