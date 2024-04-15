// login-register.component.ts

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
  imports: [CoreModule],
  standalone: true,
})
export class LoginRegisterComponent {
  loginData = {
    email: '',
    password: '',
  };

  registerData = {
    email: '',
    password: '',
    fullName: '',
  };

  login() {
    // Handle login logic
    console.log('Login:', this.loginData);
  }

  register() {
    // Handle register logic
    console.log('Register:', this.registerData);
  }
}
