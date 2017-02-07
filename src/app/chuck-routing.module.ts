import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoggedInGuard } from './login.guard';

import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'game', component: GameComponent, canActivate: [ LoggedInGuard ] },
];

export const appRoutingProviders: any[] = [
  LoggedInGuard
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class ChuckRoutingModule { }
