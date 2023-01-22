import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(public userService:UserDetailsService,private router:Router) {}

  ngOnInit(): void {}
  onAddUser(userData: NgForm) {
    if(userData.invalid)return;
    this.userService.addUser(userData.value).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['/login']);
    });
  }
}
