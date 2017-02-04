import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-login-hud',
  templateUrl: './login-hud.component.html',
  styleUrls: ['./login-hud.component.css']
})
export class LoginHudComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
  }

  openJokeDialog(){
    let message = "0";
    this.dataService.getJoke();
    this.dialogService.openDynamic(message);
  }

}
