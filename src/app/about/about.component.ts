import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private statsService: StatsService
  ) { }

  ngOnInit() {
    this.statsService.buildChuckWins();
    this.statsService.buildChuckMessage();
  }
  
  onSubmitMessage(message){
    let idk = this.loginService.idTok
    this.submitMesssage(idk, message.value);
    message.value = '';
  }

  submitMesssage(idk, message){
    this.loginService.addMessage(idk, message);
  }
  
}
