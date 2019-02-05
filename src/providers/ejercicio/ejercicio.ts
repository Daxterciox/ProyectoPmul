import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Ejercicio } from '../../models/Ejercicio/Ejercicio.interface';
import { EjercicioaleatorioPage } from '../../pages/ejercicioaleatorio/ejercicioaleatorio';

/*
  Generated class for the EjercicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EjercicioProvider {

private refEjercicios = this.db.list<Ejercicio>("Ejercicio");

  constructor(private db: AngularFireDatabase) {
    
  }

  getEjercicioList(){
    return this.refEjercicios;
  }

  anadirejercicios(Ejercicio1:Ejercicio){
    return this.refEjercicios.push(Ejercicio1);
  }

}
