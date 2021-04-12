import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  password = ''

  constructor(
    private http: HttpClient,
    private router: Router,
    public userService: UserService
  ) { }

  login(){
    this.http.get<any>('http://localhost:3000/users?username=' + this.userService.username).subscribe(data => {
        let users = data;
        if (users.length === 1 && users[0].password === this.password){
          this.userService.setUser(users[0])
          this.router.navigate(['/profile']);
        }

    })
  }

  ngOnInit(): void {
  }

}
