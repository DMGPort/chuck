import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class StatsService {

  constructor(
        private http : Http,
        private af: AngularFire,
        private dataService: DataService
        
  ) {
    this.numberOfWins = af.database.list('/users');    
    //this.categories = af.database.list('/store/categories');
    this.users = af.database.list('/users/', { preserveSnapshot: true });
   }

  numberOfWins: FirebaseListObservable<any[]>;
  gamesPlayed:number = 0;
  gamesStatsUrl: string = 'https://chuck-9a2df.firebaseio.com';
  users: FirebaseListObservable<any[]>;
  loss:number;

  addWin(displayName : string, uid: string){
    this.af.database.object('/data')
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          console.log(snapshot.val().losses);
        });
      })
      this.af.database.object('/data').set({
          losses: 0
      });  
      console.log(this.loss)

  }

}
