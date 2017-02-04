import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class DataService {

  constructor(
  ) { }

  dynamicDialogMessages: string = "";
  baseUrl: string = 'https://whatsup-c2af3.firebaseio.com/';

}
