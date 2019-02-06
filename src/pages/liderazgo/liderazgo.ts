import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilosofiadelliderazgoPage } from '../filosofiadelliderazgo/filosofiadelliderazgo';
import { QueesliderazgoPage } from '../queesliderazgo/queesliderazgo';
import { LidernaceosehacePage } from '../lidernaceosehace/lidernaceosehace';
import { ConsistelabordeliderPage } from '../consistelabordelider/consistelabordelider';



@Component({
  selector: 'page-liderazgo',
  templateUrl: 'liderazgo.html'
})
export class liderazgoPage {

  constructor(public navCtrl: NavController) {

  }

  filosofialiderazgo(){
    this.navCtrl.push(FilosofiadelliderazgoPage);
  }

  queesliderazgo(){
    this.navCtrl.push(QueesliderazgoPage);
  }

  lidernaceosehace(){
    this.navCtrl.push(LidernaceosehacePage);
  }

  consisteserlider(){
    this.navCtrl.push(ConsistelabordeliderPage);
  }

}
