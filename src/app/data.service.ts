import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';

@Injectable()
export class DataService {

  constructor(
      private http: Http
  ) { }

  dynamicDialogMessages: string = "";
  baseUrl: string = 'https://whatsup-c2af3.firebaseio.com/';

  getJoke(){
    this.http.get('http://api.icndb.com/jokes/random?')
      .map(res => res.json())
        .subscribe((joke) => {
          this.dynamicDialogMessages = joke.value.joke.replace(/&quot;/g, '\"');;
      })
  }
  
}
