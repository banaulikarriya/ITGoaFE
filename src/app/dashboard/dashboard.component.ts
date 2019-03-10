import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
   private userService: UserService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    // const data = {
    //   "username": "riyabanaulikar@gmail.com",
    //   "password": "riya@123"
    // }
    // this.userService.userapi(data).subscribe(res => {
    //   console.log(res);
    // })
  }
}
