import { Component, OnInit, Input } from '@angular/core';
import { HackernewsApiService } from '../hackernews-api.service';

@Component( {
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
} )
export class ItemComponent implements OnInit {
  @Input() itemID: number;
  item;
  constructor( private hackerNewsApi: HackernewsApiService ) {
  }

  ngOnInit() {
    this.hackerNewsApi.fetchStoryId( this.itemID ).subscribe( item => this.item = item, 
      error => console.log( 'couldn"t load this', this.itemID, error) );
  }

}
