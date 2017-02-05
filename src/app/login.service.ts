import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  public isAuthenticated = false;
  public isAdmin = false;
  public displayName: string = '';
  public photoUrl: string = '';
  private errorDuringLogin = false;

  constructor(
    private af: AngularFire,
    private dataService: DataService,
    private dialogService: DialogService,
    private router: Router
    ) {}


  private storeAuthInfo(authState: FirebaseAuthState): FirebaseAuthState {
    if (authState) {
      this.displayName = authState.auth.displayName;
      this.photoUrl = authState.auth.photoURL;
      this.isAuthenticated = true;
      if (authState.google) {
        localStorage.setItem('idToken', (authState.google as any).idToken);
        localStorage.setItem('accessToken', (authState.google as any).accessToken);
      }
    }
    return authState;
  }
  preLogin(){
        if (this.isAuthenticated) {
      this.router.navigate(['/home']);

    } else {
      this.login().then((authState) => {
        if (authState && authState.uid) {
          let message: string = "Login successful for " + authState.auth.displayName;
          this.dialogService.openDynamic(message);
          this.dialogService.closeDialogTimeout();
          this.router.navigate(['/game']);
        } else {
          this.errorDuringLogin = true;
        }
      })
    };
  }
  login(): firebase.Promise<FirebaseAuthState> {

    const idToken = localStorage.getItem('idToken');
    const accessToken = localStorage.getItem('accessToken');

    if (idToken && accessToken) {

      const authConfig = {
        method: AuthMethods.OAuthToken,
        provider: AuthProviders.Google
      };
      const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
      return this.af.auth.login(credential, authConfig).then((authState) => {
        return this.storeAuthInfo(authState);
      }).catch((err) => {
        let message: string = "Error with auth token: " + err + " Clearing cached token.."
        this.dialogService.openDynamic(message);
        localStorage.setItem('idToken', '');
        localStorage.setItem('accessToken', '');
      });
    } else {
      // fall through to popup auth
      return this.af.auth.login({
        method: AuthMethods.Popup
      }).then((authState) => {
        return this.storeAuthInfo(authState);    
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.isAdmin = false;
    this.displayName = this.photoUrl = '';
    this.af.auth.logout();
    localStorage.setItem('idToken', '');
    localStorage.setItem('accessToken', '');
    this.router.navigate(['/home']);
  }

}