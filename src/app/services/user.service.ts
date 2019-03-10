import { Injectable } from '@angular/core';
import { ApplicationUrls } from '../shared/application-urls';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedInUser: any;
  constructor(private http: HttpClient,
    private router: Router,
    private authService: AuthService) { }


   userSignup(data) {
      return this.http.post(ApplicationUrls.user.signup, data).pipe(
        map (res => {
          return res;
        })
    );
  }

  loggedInuserDetails() {
    this.loggedInUser = this.authService.getLoggedInUser();
    console.log('ss',this.loggedInUser);
  }

  editProfile(data, id) {
    return this.http.post(ApplicationUrls.user.profile + id, data).pipe(map(res => {
      return res;
    }))
  }
}
