import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HackernewsApiService } from '../hackernews-api.service';

@Component( {
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
} )
export class ItemCommentsComponent implements OnInit {
  sub: any;
  item;
  constructor( private hackerrankApi: HackernewsApiService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( param => {
      const itemId = +param.id;
      this.hackerrankApi.fetchStoryComments( itemId ).subscribe( item => {
        this.item = item;
      }, error => console.log( 'an error occured', error ) );
    } );
  }

}
