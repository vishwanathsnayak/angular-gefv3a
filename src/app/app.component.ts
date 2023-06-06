import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName: string = '';
  password: string = '';
  loggedIn: boolean = false;

  login() {
    this.loggedIn = true;
  }
  reset() {
    this.userName = '';
    this.password = '';
    this.loggedIn = false;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
