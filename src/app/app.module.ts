import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ChuckRoutingModule, appRoutingProviders } from './chuck-routing.module';
import { LoginService } from './login.service';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';
import { DialogComponent } from './dialog/dialog.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { LoginHudComponent } from './login-hud/login-hud.component';

@NgModule({
  declarations: [
    DialogComponent,
    AppComponent,
    HomeComponent,
    GameComponent,
    LoginHudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChuckRoutingModule
  ],
  providers: [ LoginService, DataService, DialogService ],
  bootstrap: [ AppComponent ],
    entryComponents:[
          DialogComponent
  ]
})
export class AppModule { }
