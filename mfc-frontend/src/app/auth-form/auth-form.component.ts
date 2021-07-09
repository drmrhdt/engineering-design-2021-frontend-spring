import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  usernameControl = '';
  passwordControl = '';

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  onSignInClick() {
    this._router.navigate(['main']);
  }
}
