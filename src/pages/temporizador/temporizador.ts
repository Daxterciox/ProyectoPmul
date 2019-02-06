import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TemporizadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-temporizador',
  templateUrl: 'temporizador.html',
})
export class TemporizadorPage {

  tiempo: any;
  timer: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tiempo = navParams.data;
    this.StartTimer();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemporizadorPage');
  }
  
  maxtime: any=30
  hidevalue : boolean = false;

  StartTimer(){
    
    console.log(this.tiempo);

    if(this.tiempo == 0){
      this.navCtrl.pop();
    }

    this.timer = setTimeout(x => 
      {
          if(this.tiempo < 0) {
           }

          this.tiempo -= 1;

          if(this.tiempo >= 0){
            this.hidevalue = false;
            this.StartTimer();
          }
          
          else{
              this.hidevalue = true;
          }

      }, 1000);
 

  }

}
