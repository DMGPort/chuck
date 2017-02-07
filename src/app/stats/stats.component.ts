import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(
      private loginService: LoginService,
      private statsService: StatsService
  ) { }

  ngOnInit() {
  }

}
