import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string;
  message: string;
  geometka: string;
  tag: string;

  constructor(public navCtrl: NavController, private af: AngularFireDatabase) {

  }
  sendMessage(title: string, message: string, geometka: string, tag: string){
    this.af.list('Акции').push({title, message, geometka, tag});
    this.title = "";
    this.message = "";
    this.geometka = "";
    this.tag = "";
  }
}
