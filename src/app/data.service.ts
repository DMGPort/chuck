import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';

@Injectable()
export class DataService {

  constructor(
      private http: Http
  ) { }

  dynamicDialogMessages: string = "";
  name: string;

  
}
