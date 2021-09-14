import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

    token:string ="";
    public loggedUser:string="";
    public isloggedIn: Boolean = false;
    TOKEN_KEY = "AuthToken";
    USERNAME_KEY = 'AuthUsername';
    private username: string = "";

    constructor(private router: Router,
                private http : HttpClient) { }
  
    public loginUser(user: User):Observable<any> {
        return this.http.post<User>("http://localhost:8080/api/auth/signin", user);
    }

    public getToke() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    public saveToken(jwt:string) {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.setItem(this.TOKEN_KEY, jwt);
        this.isloggedIn = true;
        
    }

    public saveUsername(username: string) {
       localStorage.removeItem(this.USERNAME_KEY);
       localStorage.setItem(this.USERNAME_KEY, username);
    }

    public getUsername() {
        return localStorage.getItem(this.USERNAME_KEY);
    }


    public userLogOut() {
        this.isloggedIn = false;
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USERNAME_KEY);

    }

   
    

}
