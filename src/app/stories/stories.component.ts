import { Component, OnInit } from '@angular/core';
import { HackernewsApiService } from '../hackernews-api.service';

@Component( {
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
} )
export class StoriesComponent implements OnInit {
  items;
  constructor(private hackernewsApi: HackernewsApiService ) {
    // this.items = Array( 30 );
    this.hackernewsApi.fetchStories('news', 1).subscribe(stories => this.items = stories, error  => console.log(error));
  }

  ngOnInit() {

  }

}
