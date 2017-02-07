import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { DataService } from './data.service';
import { User } from './user';

@Injectable()
export class StatsService {

  constructor(
        private http : Http,
        private af: AngularFire,
        private dataService: DataService
        
  ) {

   }

  numberOfWins: FirebaseListObservable<number[]>;
  totalChuckWins: number;
  totalLosses: number
  buildChuckWins(){
      this.getUsers()
        .subscribe(users =>{
          this.totalChuckWins = 0;          
          for(let x = 0; x < users.length ; x++ ){
            this.totalChuckWins += (users[x].losses);
          }
        })
  }
  messageArray: User[];
  buildChuckMessage(){
    this.messageArray = [];
      this.getUsers()
        .subscribe(users =>{
          this.totalChuckWins = 0;          
          for(let x = 0; x < users.length ; x++ ){
            let us: User = {
              name: users[x].name,
              uid: users[x].uid,
              message: users[x].message
            }
            this.messageArray.push(us);
          }
        })
  }
  userStats(uid){
    this.getUserStat(uid)
      .subscribe(user => this.totalLosses = (user[0].$value))
  }
  getUserStat(uid){
    return this.af.database.list('/users/'+ uid);
  }
  getUsers(){
    return this.af.database.list('/users');
  }
  getLosses(name: string){
    return this.af.database.list('/store/'+ name);
  }

}
