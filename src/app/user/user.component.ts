import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HackernewsApiService } from '../hackernews-api.service';

@Component( {
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
} )
export class UserComponent implements OnInit {
  id: string;
  user: any;
  userSub: any;
  constructor( private hackerrankApi: HackernewsApiService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.userSub = this.route.params.subscribe( param => this.id = param.id );
    this.hackerrankApi.fetchUserDetails( this.id ).subscribe( user => this.user = user, ( error ) => console.log( error ) );
  }

}
