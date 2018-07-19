
import { EditComponent } from './edit/edit.component';
import { NgModule } from '@angular/core'

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path : 'new', component : AddComponent },
  {path : 'edit/:id', component : EditComponent },
  { path : '', component : HomeComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
