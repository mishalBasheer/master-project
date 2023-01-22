import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userIsAuthenticted!: boolean;
  private isAuthListenerSub!: Subscription;
  constructor(private loginService: UserDetailsService) {}

  ngOnInit(): void {
    this.userIsAuthenticted = this.loginService.getIsAuth();
    this.isAuthListenerSub = this.loginService
      .getIsAuthListener()
      .subscribe((isAuth) => {
        this.userIsAuthenticted = isAuth;
      });
  }
  onLogout() {
    this.userIsAuthenticted = false;
    this.loginService.logout();
  }
  ngOnDestroy(): void {
    this.isAuthListenerSub.unsubscribe();
  }
}
