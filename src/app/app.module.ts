import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaPage } from '../pages/lista/lista';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { EjercicioProvider } from '../providers/ejercicio/ejercicio';
import { EjercicioaleatorioPage } from '../pages/ejercicioaleatorio/ejercicioaleatorio';

export const firebaseConfig = {
    apiKey: "AIzaSyAwoZUXfjqrADz29_lEqNqqQNt5G2OMxFo",
    authDomain: "proyecto-pmul.firebaseapp.com",
    databaseURL: "https://proyecto-pmul.firebaseio.com",
    projectId: "proyecto-pmul",
    storageBucket: "proyecto-pmul.appspot.com",
    messagingSenderId: "592533147291"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaPage,
    EjercicioaleatorioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaPage,
    EjercicioaleatorioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EjercicioProvider
  ]
})
export class AppModule {}
