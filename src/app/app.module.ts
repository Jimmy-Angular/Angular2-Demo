import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HeroListComponent} from './hero/hero-list.component'
import {HeroDetailComponent} from './hero/hero-detail.component';
import {HeroService}         from './hero/hero.service';
import {Logger}              from './service/logger.service';
import {HeroInputComponent} from './hero/hero-input.component';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HeroService,
    Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
