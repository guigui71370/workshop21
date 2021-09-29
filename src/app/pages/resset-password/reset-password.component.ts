import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-resset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})

export class ResetPasswordComponent implements OnInit {
   oldPassword:string;
   newPassword:string;
   confirmPassword:string;
  constructor() { }

  ngOnInit(): void {
  }
  verification(form: NgForm):void{
    this.oldPassword=form.value['old'];
    console.log(this.oldPassword);
  }
}
