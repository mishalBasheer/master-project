import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService:UserDetailsService){}
  hide = true;
  ngOnInit(): void {}
  onLogin(loginForm: NgForm) {
    if (loginForm.invalid) return;
    this.loginService.loginCheck(loginForm.value);
  }
}
