import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
    username = ""
    user = undefined

    constructor() {
      var user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        this.user = user;
        console.log('loaded: user')
        console.log(user)
      }
    }
    setUser(user){
      this.user = user
      localStorage.setItem("user", JSON.stringify(user));
    }
}
