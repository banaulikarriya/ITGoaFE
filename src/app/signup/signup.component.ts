import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserService } from 'app/services/user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    // test : Date = new Date();

    signupForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.signupForm = this.fb.group({
            name: new FormControl(''),
            username: new FormControl(''),
            email: new FormControl(''),
            contact: new FormControl(''),
            password: new FormControl('')
        })
    }

    signup() {
    //    console.log(this.signupForm.value);
        this.userService.userSignup(this.signupForm.value).subscribe((res: any) => {
            console.log(res.data);
        })
    }
}
