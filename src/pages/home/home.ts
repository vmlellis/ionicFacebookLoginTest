import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isLoggedIn:boolean = false;
  user: any;
  data: any;

  constructor(public navCtrl: NavController, private fb: Facebook) {
    fb.getLoginStatus()
      .then(res => {
        console.log(res);
        console.log(res.status);
        if(res.status === "connect") {
          this.logout();
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log(e));
  }

  login() {
    this.fb.login(['public_profile', 'email'])
      .then(res => {
        console.log(res);
        if(res.status === "connected") {
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  logout() {
    this.fb.logout()
      .then( res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
  }

  getUserDetail(userid) {
    this.fb.api("/"+userid+"/?fields=id,email,gender,first_name,last_name",["public_profile"])
      .then(res => {
        console.log(res);
        this.user = res;
        this.isLoggedIn = true;
      })
      .catch(e => {
        console.log(e);
      });
  }
}
