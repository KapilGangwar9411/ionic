import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.page.html',
  styleUrls: ['./login-signup.page.scss'],
})
export class LoginSignupPage {
  showPassword: boolean = false;

  constructor(private router: Router) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  skipLogin(): void {
    this.router.navigate(['/homepage']);
  }
}
