import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  //private variables
  private isAuthenticated: boolean = false;
  private tokenTimer!: NodeJS.Timeout;
  private isAuthListener = new Subject<boolean>();

  //constructor
  constructor(private http: HttpClient, private router: Router) {}

  //Creating new user
  addUser(user: User): Observable<{ message: string; isAdded: boolean }> {
    return this.http.post<{ message: string; isAdded: boolean }>(
      'http://localhost:3000/api/user/signup',
      user
    );
  }

  //get whether user is Authenticated
  getIsAuth(): boolean {
    return this.isAuthenticated;
  }

  //Authentication while loging in and redirection to home
  loginCheck(user: User) {
    this.http
      .post<{ token: string; expiresIn: number }>(
        'http://localhost:3000/api/user/login',
        user
      )
      .subscribe((loginData) => {
        const expiresInSec = loginData.expiresIn;

        this.setAuthTimer(expiresInSec);

        // getting the expiration date from the loginData.expiresIn
        // which is initially a hour in milliseconds
        const now = new Date();
        const expirationDate = new Date(
          now.getTime() + loginData.expiresIn * 1000
        );

        //saving token and expirationDt to localStorage
        this.saveAuthData(loginData.token, expirationDate);

        //authenticated if there exist a token
        if (loginData.token) {
          this.isAuthenticated = true;
          this.isAuthListener.next(true);
          //navigated to home after successfull login
          this.router.navigateByUrl('/home');
        }
      });
  }

  //subject 'isAuthListener' is returning as a Observable to intrested listeners
  getIsAuthListener() {
    return this.isAuthListener.asObservable();
  }

  //user logout
  logout() {
    this.isAuthenticated = false;
    this.isAuthListener.next(false);
    //settimeout set while login is cleared
    clearTimeout(this.tokenTimer);
    //clearing local storage
    this.clearAuthData();
    //navigate to home after logout
    this.router.navigateByUrl('/');
  }

  //automatically authenicate user when user refresh the
  //page by the information in the localstorage iteself
  autoAuthUser() {
    const authInfo = this.getAuthData();
    if (authInfo?.expiresIn) {
      //setting a new timer to logout according to current time (time when reloaded)
      const now = new Date();
      const InFuture = authInfo.expiresIn.getTime() - now.getTime();
      if (InFuture > 0) {
        //if is not expired then set the authentication to true and decreasing the set timer
        this.isAuthenticated = true;
        this.setAuthTimer(InFuture / 1000);
        this.isAuthListener.next(true);
      }
    }
  }

  //set timer according to the duration and logout when timeout;
  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  //saving token and expires in to local storage
  //so that it cannot be lost in user refresh page
  private saveAuthData(token: string, expiration: Date) {
    localStorage.setItem('token', token);
    // changing date object to string (because parameter should be in string in local storage)
    localStorage.setItem('expiresIn', expiration.toISOString());
  }

  //clearing token and expires in data from the local storage
  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
  }

  //this will return a void if either of the token or expires in is not found
  //else return the token and expires in as an object
  private getAuthData() {
    const token = localStorage.getItem('token');
    const expiresIn = localStorage.getItem('expiresIn');
    if (!token || !expiresIn) {
      return;
    }
    return {
      token: token,
      //changing date stored as a string to date object
      expiresIn: new Date(expiresIn),
    };
  }
}
