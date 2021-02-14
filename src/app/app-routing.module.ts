import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";
import { StateManComponent } from './state-man/state-man.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "list", component: ListComponent},
  {path: "state", component: StateManComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
