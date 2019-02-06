import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EjercicioaleatorioPage } from '../ejercicioaleatorio/ejercicioaleatorio';
import { EjerciciobicepsPage } from '../ejerciciobiceps/ejerciciobiceps';
import { EjerciciopiernasPage } from '../ejerciciopiernas/ejerciciopiernas';
import { EjercicioabdominalesPage } from '../ejercicioabdominales/ejercicioabdominales';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }
  
  Ejerciciospecho = EjercicioaleatorioPage;

  Ejerciciosbiceps = EjerciciobicepsPage;

  Ejerciciospiernas = EjerciciopiernasPage;

  Ejerciciosabdominales = EjercicioabdominalesPage;
}
