import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupListComponent } from './pages/groups/list/group-list.component';
import { GroupAddComponent } from './pages/groups/add/group-add.component';
import { GroupEditComponent } from './pages/groups/edit/group-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    GroupAddComponent,
    GroupEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
