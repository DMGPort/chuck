import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class StatsService {

  constructor(
        private http : Http,
        private af: AngularFire
  ) {
    this.numberOfWins = af.database.list('/games/norriswins');    
    //this.categories = af.database.list('/store/categories');
   }

  numberOfWins: FirebaseListObservable<any[]>;
  gamesPlayed:number = 0;

  gamesStatsUrl: string = 'https://chuck-9a2df.firebaseio.com/games';

  addWin(displayName : string, idtoken: string){
    const body = JSON.stringify({ uid : idtoken, name: displayName })
    console.log(body)
    return this.http.post(this.gamesStatsUrl+"/norriswins.json", body)
               .map((res: Response) => res.json())
               .subscribe();
  }

}
