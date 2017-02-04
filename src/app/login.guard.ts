import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
    
    constructor(
        private router: Router,
        private loginService: LoginService,
    ){}
    
    canActivate(): boolean{   
        console.log("Guard function has been invoked");

        let authenticated = false;

        if (this.loginService.isAuthenticated) {
            authenticated = true;
        }
        else {
            this.router.navigate(['/home']);
        }
        console.log("Returning from Guard function with: " + authenticated);
        return authenticated;
    }
    
}
