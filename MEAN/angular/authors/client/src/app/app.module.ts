import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { AddComponent } from './add/add.component'
import { EditComponent } from './edit/edit.component'
import { HomeComponent } from './home/home.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'

import { HttpService } from './http.service'


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
