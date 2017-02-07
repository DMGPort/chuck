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
        let authenticated = false;

        if (this.loginService.isAuthenticated) {
            authenticated = true;
        }
        else {
            this.router.navigate(['/home']);
        }
        return authenticated;
    }
    
}
