import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-login-hud',
  templateUrl: './login-hud.component.html',
  styleUrls: ['./login-hud.component.css']
})
export class LoginHudComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private dialogService: DialogService,
    private dataService: DataService,
    private router: Router
    ) { }
    


  ngOnInit() {
  }

  login(){
    this.loginService.preLogin();
  }

  logOut(){
    this.loginService.logout();
  }

}
