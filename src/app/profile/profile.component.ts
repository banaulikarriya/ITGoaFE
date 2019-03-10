import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ProfileDialogComponent } from '../dialogs/profile-dialog/profile-dialog.component';
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    closeResult: string;
    constructor(private modalService: NgbModal) { }

    ngOnInit() {}

    open() {
        const modalRef = this.modalService.open(ProfileDialogComponent, {size: 'lg'});
        modalRef.componentInstance.name = 'World';
      }
}
