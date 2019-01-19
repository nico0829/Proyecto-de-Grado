import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EticaymoralPage } from '../eticaymoral/eticaymoral';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  eticaYmoral(){
    this.navCtrl.push(EticaymoralPage);
  }

}
