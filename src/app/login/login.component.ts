import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  flag: boolean = false;

  constructor(public router: Router) {}
  
  getUserInput(login: any, password: any) {
    if( login.value === "Michael Jakson" && password.value === "jetaimemic") {
      this.router.navigate(['/home'])
    }
    this.flag = true;
  }
}
