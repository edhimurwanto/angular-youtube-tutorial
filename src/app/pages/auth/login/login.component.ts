import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })


  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    sessionStorage.setItem('credentials', 'username: user')
  }

  onSubmit() {
    console.log('SUBMIT CLICKED');
    
    console.log(this.loginForm.value);
    this.onLogin()
  }

}
