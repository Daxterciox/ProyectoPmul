import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EjercicioProvider } from '../../providers/ejercicio/ejercicio';

import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import { Ejercicio } from '../../models/Ejercicio/Ejercicio.interface';

/**
 * Generated class for the EjerciciopiernasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ejerciciopiernas',
  templateUrl: 'ejerciciopiernas.html',
})
export class EjerciciopiernasPage {
  listaEjercicios: Observable<Ejercicio[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioEjercicio: EjercicioProvider) {

    this.listaEjercicios = this.servicioEjercicio
    .getEjercicioList()
    .snapshotChanges()
      .pipe(map(changes => {
        return changes.map(
          c => ({
            key: c.payload.key,
            ...c.payload.val(),
          })
        )
      }
      ))
  }

}
