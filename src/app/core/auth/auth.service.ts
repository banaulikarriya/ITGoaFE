import { Injectable } from '@angular/core';
import { ApplicationUrls } from '../../shared/application-urls';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';
import { RequestOptions, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private roleSubject = new BehaviorSubject<any>(null);
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    // this.bypassAuth();
  }

  loginRegistredUser(data) {
      return this.http.post(ApplicationUrls.auth.login, data).pipe(
        map (res => res)
    );
  }

  getLoggedInUser() {
    console.log('sto',localStorage.getItem('loginuser'));
    const user = JSON.parse(localStorage.getItem('loginuser'));
    console.log(user);
    return user ? user : null;
}
  getUserToken() {
    console.log('token',localStorage.getItem('token'));
    const token = localStorage.getItem('token');
    if (token !== null && token !== '') {
        return token;
    }
  }


}
