import { Injectable } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { DataService } from './data.service';

@Injectable()
export class DialogService {

  constructor(
      private dataService: DataService
  ) { }
  

  openDynamic(message: string){
    this.dataService.dynamicDialogMessages = message;
  }

  closeDialogTimeout(){
      setTimeout(() => {
      }, 1500)
  }
}
