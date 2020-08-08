import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { HackernewsApiService } from './hackernews-api.service';
import { DomainPipe } from './domain.pipe';
import { ItemCommentsComponent } from './item-comments/item-comments.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    DomainPipe,
    ItemCommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MomentModule,
    routing
  ],
  providers: [HackernewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
