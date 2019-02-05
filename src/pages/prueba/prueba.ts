import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ejercicio } from '../../models/Ejercicio/Ejercicio.interface';
import { EjercicioProvider } from '../../providers/ejercicio/ejercicio';

/**
 * Generated class for the PruebaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prueba',
  templateUrl: 'prueba.html',
})
export class PruebaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioEjercicio: EjercicioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PruebaPage');
  }

  e:Ejercicio={
    Descanso: 10,
    Repeticiones: 20,
    Tipo: "madre mia willy",
    Categoria: "pecho"
  }

  anadir(){
  this.servicioEjercicio.anadirejercicios(this.e);
  }

}
