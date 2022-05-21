import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CenterModule} from './center/center.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    CenterModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
