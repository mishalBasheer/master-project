import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor(public userService:UserDetailsService) {}

  ngOnInit(): void {}
  onAddUser(userData: NgForm) {
    if(userData.invalid)return;
    this.userService.addUser(userData.value).subscribe((response)=>{
      console.log(response);
    });
  }
}
