import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PlayerSelectScreenComponent} from "./player-select-screen/player-select-screen.component";

const routes: Routes = [
  { path: 'select-players', component: PlayerSelectScreenComponent },
  { path: '', redirectTo: '/select-players', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
