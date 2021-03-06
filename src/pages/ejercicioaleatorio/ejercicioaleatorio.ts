import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EjercicioProvider } from '../../providers/ejercicio/ejercicio';
import { TemporizadorPage } from '../../pages/temporizador/temporizador'

import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import { Ejercicio } from '../../models/Ejercicio/Ejercicio.interface';

@IonicPage()
@Component({
  selector: 'page-ejercicioaleatorio',
  templateUrl: 'ejercicioaleatorio.html',
})
export class EjercicioaleatorioPage {


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

  ionViewDidLoad() {
    console.log('ionViewDidLoad EjercicioaleatorioPage');
  }

  temporizador(descanso: number){
    this.navCtrl.push(TemporizadorPage, descanso); 
  }

}
