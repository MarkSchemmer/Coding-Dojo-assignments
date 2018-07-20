import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path : '' , redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent, pathMatch : 'full' },
  {path : 'list', component : ListComponent },
  {path : 'edit/:id', component : EditComponent },
  {path : 'create', component : CreateComponent , pathMatch : 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
