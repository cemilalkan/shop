import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],

})
export class NavComponent implements OnInit {

  constructor(private accountservice:AccountService) { }
  
    ngOnInit() {}
    isLoggedin(){
      return this.accountservice.isLoggedIn();
    }
    logOut(){
      this.accountservice.logOut();
    }
}
