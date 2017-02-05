import { Component } from '@angular/core';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private dataService: DataService,
    private dialogService: DialogService
  ) { }

  openJokeDialog(){
    this.dataService.getJoke();
    this.dialogService.openDynamic(this.dataService.dynamicDialogMessages);
  }
}
