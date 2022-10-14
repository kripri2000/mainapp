import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { DownloadComponent } from './download/download.component';
const routes: Routes = [
 {path:'todo',component:TodoComponent},
 {path:'download',component:DownloadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
