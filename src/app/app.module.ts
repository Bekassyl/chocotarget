import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { Firebase } from '@ionic-native/firebase';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FoodPage } from '../pages/food/food';
import {Push, PushObject, PushOptions} from "@ionic-native/push";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'e035d688'
  },
  'push': {
    'sender_id': '83150533068 ',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

const CONFIG = {
    apiKey: "AIzaSyCENe2hSvTZSsk_OsCEaZj4_GhRX6GxlIE",
    authDomain: "*.firebaseapp.com",
    databaseURL: "https://choco1-a83f4.firebaseio.com",
    projectId: "choco1-a83f4",
    storageBucket: "*.appspot.com",
    messagingSenderId: "*"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FoodPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FoodPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
