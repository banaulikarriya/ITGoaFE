import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserService } from 'app/services/user.service';
@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
 // styleUrls: ['./profile-dialog.component.scss']
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
      width: 20% !important;
      max-width: 20% !important;
    }
    .dark-modal .close {
      color: white;
       width: 20% !important;
      max-width: 20% !important;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
       width: 20% !important;
      max-width: 20% !important;
    }
  `]
})
export class ProfileDialogComponent implements OnInit {
  closeResult: string;

  profileForm: FormGroup;
  loggedInuser: any;
  constructor(public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private userServie: UserService) {
      this.loggedInuser = this.userServie.loggedInUser;
      console.log(this.loggedInuser);
    }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.profileForm = this.fb.group({
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      contact: new FormControl(''),
      description: new FormControl(''),
      pincode: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
    })
  }

  saveProfile(){
    this.userServie.editProfile(this.profileForm.value,this.loggedInuser ).subscribe((res: any) => {
      console.log(res);
    })
  }
  
}
