import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { DataService } from './data.service';

@Injectable()
export class DialogService {

  constructor(
      private dialog: MdDialog,
      private dataService: DataService
  ) { }
  

  openDynamic(message: string){
    if(message != "0"){
      this.dataService.dynamicDialogMessages = message;
      this.dialog.open(DialogComponent);
    }
  }

  closeDialogTimeout(){
      setTimeout(() => {
        this.dialog.closeAll();
      }, 1500)
  }
}
