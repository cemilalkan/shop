import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';





@Injectable()
export class AccountService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/user";

  loggedIn = false;

  login(username: string, password: string): boolean {

    const newPath = this.path + "?userName=" + username + "&&password=" + password;
    console.log(newPath);


    this.http.get<User>(newPath).subscribe(data => {
      if (Object.keys(data).length) {
        this.loggedIn = true;
        localStorage.setItem("isLogget", username)
        return true;
      }
    })
    return false;
  }



  isLoggedIn() {
    return this.loggedIn;
  }
  logOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}
