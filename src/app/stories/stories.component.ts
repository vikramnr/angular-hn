import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HackernewsApiService } from '../hackernews-api.service';

@Component( {
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
} )
export class StoriesComponent implements OnInit, OnDestroy {
  items;
  typeSub;
  storiesType;
  pageSub: any;
  pageNum: number;
  listStart: number;
  constructor( private hackernewsApi: HackernewsApiService, private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.typeSub = this.route.data.subscribe( data => this.storiesType = ( data as any ).storiesType );
    this.pageSub = this.route.data.subscribe( params => {
      this.pageNum = +params.page ? +params.page : 1;
    } );
    this.hackernewsApi.fetchStories( this.storiesType, this.pageNum )
      .subscribe(
        stories => this.items = stories, error => console.log( error ), () => this.listStart = ( ( this.pageNum - 1 ) * 30 ) + 1 );
  }
  ngOnDestroy() {
    this.pageSub.unsubscribe();
    this.typeSub.unsubscribe();
  }

}
