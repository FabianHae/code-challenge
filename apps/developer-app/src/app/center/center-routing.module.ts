import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  //Module Redirection
  { path: 'center', redirectTo: 'center/index', pathMatch: 'full'},
  { path: 'center/index', component: IndexComponent },
  { path: 'center/:centerId/view', component: ViewComponent },
  { path: 'center/create', component: CreateComponent },
  { path: 'center/:centerId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CenterRoutingModule { }
