import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpService } from './http.service';

import { HttpClientModule } from '@angular/common/http';
import { SubmitComponent } from './submit/submit.component';
import { RateComponent } from './rate/rate.component';
import { DisplayComponent } from './display/display.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SubmitComponent,
    RateComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpService,  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
