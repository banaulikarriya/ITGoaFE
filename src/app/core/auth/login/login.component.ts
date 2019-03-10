import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  error: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    console.log("res");
    // this.router.navigate(['user-profile']);
    const data = {
      //  'username': "riyabanaulikar@gmail.com",
      // 'password': "riya@123",

      //       "password" : "ds",
      // "first_name" : "Fdsfs",
      // "last_name" : "fgdfg",
      // "contact" : "4234252352",
      // "email" : "sdfd@sdfdsf.ds"

    };
    this.authService.loginRegistredUser(this.loginForm.value)
      .subscribe((res: any) => {
        console.log(res , res.code === 200);

        if (res &&  res.code === 200) {
          localStorage.setItem('token', res.token );
          console.log(res.data);
          localStorage.setItem('loginuser', JSON.stringify(res.data) );
          this.router.navigate(['user-profile']);
        }
      },
        error => { // error path
          this.error = error
        });
  }

}
