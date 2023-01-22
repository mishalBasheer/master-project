import { Component } from '@angular/core';
import { UserDetailsService } from './services/user-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userLoginData: UserDetailsService) {}
  ngOnInit(): void {
    //auto authentication is done in ngOnInit
    //while refreshing the page this function will trigger
    this.userLoginData.autoAuthUser();
  }
}
