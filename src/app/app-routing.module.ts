import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupListComponent } from "./pages/groups/list/group-list.component";
import { GroupAddComponent } from "./pages/groups/add/group-add.component";
import { GroupEditComponent } from "./pages/groups/edit/group-edit.component";

const routes: Routes = [
  {
    path: '',
    component: GroupListComponent
  },
  {
    path: 'add',
    component: GroupAddComponent
  },
  {
    path: 'edit/:id',
    component: GroupEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
