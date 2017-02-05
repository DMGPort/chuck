import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { ChuckRoutingModule, appRoutingProviders } from './chuck-routing.module';

import { LoginService } from './login.service';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';
import { DialogComponent } from './dialog/dialog.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { LoginHudComponent } from './login-hud/login-hud.component';

export const firebaseConfig = {
      apiKey: " AIzaSyCvNaZEWqsWeYQmTpJ13mmOVeeMG4mfrUM",
      authDomain: "chuck-9a2df.firebaseapp.com",
      databaseURL: "https://chuck-9a2df.firebaseio.com/",
      storageBucket: ""
};
export const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}
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
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    ChuckRoutingModule
  ],
  providers: [   
    DataService, 
    DialogService, 
    LoginService, 
    appRoutingProviders ],
  bootstrap: [AppComponent],
  entryComponents:[
      DialogComponent
  ]
})
export class AppModule { }
