import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'masterDiet';

  constructor(public auth: AngularFireAuth) {
  }
  login() {
    this.auth.signInWithEmailAndPassword ("luismartinezborgogno@gmail.com", "123763");
  }
  logout() {
    this.auth.signOut();
  }
}
