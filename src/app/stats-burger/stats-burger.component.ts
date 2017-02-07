import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-stats-burger',
  templateUrl: './stats-burger.component.html',
  styleUrls: ['./stats-burger.component.css']
})
export class StatsBurgerComponent implements OnInit {

  constructor(
      private loginService: LoginService
  ) { }
  
  ngOnInit() {
  }

  @Input() isClosed = true;
  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();

  toggle() {
      this.isClosed = !this.isClosed;
      this.isClosed ? this.closed.emit(): this.opened.emit();
  }
}