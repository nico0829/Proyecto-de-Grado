import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RelachumanasPage } from '../relachumanas/relachumanas';



@Component({
  selector: 'page-liderazgo',
  templateUrl: 'liderazgo.html'
})
export class liderazgoPage {

  constructor(public navCtrl: NavController) {

  }

  RelacionHumanas(){
    this.navCtrl.push(RelachumanasPage);
  }

}
