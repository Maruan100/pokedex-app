import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup = new FormGroup({
    email: new FormControl('example@email.com', [Validators.required, Validators.email]),
    password: new FormControl('example1', [
      Validators.required,
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
    ]),
  });

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  logIn() {
    this.authService.saveItem('userData', this.logInForm.value)
    this.router.navigate(['/pokedex']);
    
  }
}
