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
import { PruebaPage } from '../pages/prueba/prueba';

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
    EjercicioaleatorioPage,
    PruebaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaPage,
    EjercicioaleatorioPage,
    PruebaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EjercicioProvider
  ]
})
export class AppModule {}
