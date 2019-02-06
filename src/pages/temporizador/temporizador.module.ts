import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemporizadorPage } from './temporizador';

@NgModule({
  declarations: [
    TemporizadorPage,
  ],
  imports: [
    IonicPageModule.forChild(TemporizadorPage),
  ],
})
export class TemporizadorPageModule {}
