import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilosofiadelliderazgoPage } from '../filosofiadelliderazgo/filosofiadelliderazgo';
import { QueesliderazgoPage } from '../queesliderazgo/queesliderazgo';
import { LidernaceosehacePage } from '../lidernaceosehace/lidernaceosehace';
import { ConsistelabordeliderPage } from '../consistelabordelider/consistelabordelider';
import { TipodeliderazgoPage } from '../tipodeliderazgo/tipodeliderazgo';
import { LidercarisimoPage } from '../lidercarisimo/lidercarisimo';
import { RiesgosacaerPage } from '../riesgosacaer/riesgosacaer';


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

  tiposdeliderazgo(){
    this.navCtrl.push(TipodeliderazgoPage);
  }

  lidercarisimo(){
    this.navCtrl.push(LidercarisimoPage);
  }

  riesgosacaer(){
    this.navCtrl.push(RiesgosacaerPage);
  }
}
