import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: User = new User();
  LS = "";
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getLocalStorage();
  }
  getLocalStorage() {
    if (localStorage.getItem("isLogget") === null) {
      this.LS = "";
    } else {
      this.LS = localStorage.getItem("isLogget")
    }
  }
  login(form: NgForm) {
    this.accountService.login(this.model.userName, this.model.password);

  }

}
