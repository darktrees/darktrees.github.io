import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayerSelectScreenComponent } from './player-select-screen/player-select-screen.component';
import {GameService} from "./shared/game.service";

@NgModule({
  declarations: [
    AppComponent,
    PlayerSelectScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
