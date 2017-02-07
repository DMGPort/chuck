import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { StatsService } from '../stats.service';
import { MdSnackBar } from '@angular/material';
import { Http } from '@angular/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private statsService: StatsService,
    private mdSnackBar: MdSnackBar,
    private http: Http
  ) { }

  ngOnInit() {
    this.getJoke();
    this.playerFlip = "back";
    this.chuckFlip = "back";
  }

  gameStopped = true;
  joke: string = "";
  chuckFlip:string = "back";
  cSuit:string = "";
  cRank:string = "";
  cCard:string = this.chuckFlip + this.cSuit + this.cRank;
  cSuitNumber:number;
  cRankNumber:number;

  playerFlip:string = "back";
  pSuit:string = "";
  pRank:string = "";
  pCard:string = this.playerFlip + this.pSuit + this.pRank;
  pSuitNumber:number;
  pRankNumber:number;

  snackBar(message: string, action: string){
    this.mdSnackBar.open(message, action, {
      duration: 4500
      });
  }
  logOut(){
    this.loginService.logout();
  }
  getJoke(){
      this.http.get('https://api.icndb.com/jokes/random?')
        .map(res => res.json())
          .subscribe((joke) => {
            this.joke = joke.value.joke.replace(/&quot;/g, '\"');;
        })
    }
  getRandomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min);
  }

  addLoss(iud){
    this.loginService.addCount(iud);
  }
  
  chuckStarts(){
    this.gameStopped = false;
    this.cCard = "back";
    this.pCard = "back";
      setTimeout(() => {
        //Get Chucks Card
        this.cSuitNumber = this.getRandomNumber(4, 1);
        this.cSuit = this.checkSuit(this.cSuitNumber);
        this.cRankNumber = this.getRandomNumber(3, 14);
        this.cRank = this.checkRank(this.cRankNumber);
        this.chuckFlip = "card";      
        this.cCard = this.chuckFlip + this.cSuit + this.cRank;    
        setTimeout(() =>{
          //Get Players Card
          this.pSuitNumber = this.getRandomNumber(4, 1);
          this.pSuit = this.checkSuit(this.pSuitNumber);
          this.pRankNumber = this.getRandomNumber(2, 13);          
          while(this.pRankNumber >= this.cRankNumber ){
            this.pRankNumber = this.getRandomNumber(2, 13);
          }
          this.pRank = this.checkRank(this.pRankNumber);
          this.playerFlip = "card";      
          this.pCard = this.playerFlip + this.pSuit + this.pRank;    
          this.addLoss(this.loginService.idTok);
          this.gameStopped = true;
          let message = "Chuck has Won " + this.loginService.displayName + ": ";
          let action = this.statsService.totalLosses +  " times";
          this.snackBar(message, action);
          this.getJoke(); 
        }, 300)
      },400)
  }
  playerStarts(){   
    this.gameStopped = false;
    this.cCard = "back";
    this.pCard = "back";
      setTimeout(() => {
        //Get Player Card
        this.pSuitNumber = this.getRandomNumber(4, 1);
        this.pSuit = this.checkSuit(this.pSuitNumber);
        this.pRankNumber = this.getRandomNumber(2, 13);
        this.pRank = this.checkRank(this.pRankNumber);
        this.playerFlip = "card";      
        this.pCard = this.playerFlip + this.pSuit + this.pRank;    
        setTimeout(() =>{
          //Get Players Card
          this.cSuitNumber = this.getRandomNumber(4, 1);
          this.cSuit = this.checkSuit(this.cSuitNumber);
          this.cRankNumber = this.getRandomNumber(3, 14);          
          while(this.cRankNumber <= this.pRankNumber ){
            this.cRankNumber = this.getRandomNumber(3, 14);
          }
          this.cRank = this.checkRank(this.cRankNumber);
          this.chuckFlip = "card";      
          this.cCard = this.chuckFlip + this.cSuit + this.cRank;    
          this.addLoss(this.loginService.idTok);         
          this.gameStopped = true;
          let message = "Chuck has Won " + this.loginService.displayName + ": ";
          let action = this.statsService.totalLosses +  " times";
          this.snackBar(message, action);
          this.getJoke();
        }, 300)
      },400)
  }
  toogleSuit = false;
  checkSuit(suitNumber){ //sma meira random i suits
    this.toogleSuit == !this.toogleSuit;
    return this.toogleSuit ? this.checkSuit1(suitNumber) : this.checkSuit2(suitNumber);
  }
  checkSuit1(suitNumber){
      if(suitNumber == 1){
        return " heart";
      }
      if(suitNumber == 2){
        return " spade";
      }
      if(suitNumber == 3){
        return " diamond";
      }
      if(suitNumber == 4){
        return " club";
      }
  }
  checkSuit2(suitNumber){
      if(suitNumber == 2){
        return " heart";
      }
      if(suitNumber == 1){
        return " spade";
      }
      if(suitNumber == 4){
        return " diamond";
      }
      if(suitNumber == 3){
        return " club";
      }
  }

  checkRank(number){
      if(number == 2){
        return " two";
      }
      if(number == 3){
        return " three";
      }
      if(number == 4){
        return " four";
      }
      if(number == 5){
        return " five";
      }
      if(number == 6){
        return " six";
      }
      if(number == 7){
        return " seven";
      }
      if(number == 8){
        return " eight";
      }
      if(number == 9){
        return " nine";
      }
      if(number == 10){
        return " ten";
      }
      if(number == 11){
        return " jack";
      }
      if(number == 12){
        return " queen";
      }
      if(number == 13){
        return " king";
      }
      if(number == 14){
        return " ace";
      }
  }

}