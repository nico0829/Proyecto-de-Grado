import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilosofiadelliderazgoPage } from '../filosofiadelliderazgo/filosofiadelliderazgo';
import { QueesliderazgoPage } from '../queesliderazgo/queesliderazgo';
import { LidernaceosehacePage } from '../lidernaceosehace/lidernaceosehace';
import { ConsistelabordeliderPage } from '../consistelabordelider/consistelabordelider';
import { TipodeliderazgoPage } from '../tipodeliderazgo/tipodeliderazgo';
import { LidercarisimoPage } from '../lidercarisimo/lidercarisimo';
import { RiesgosacaerPage } from '../riesgosacaer/riesgosacaer';
import { BasesparaserunliderPage } from '../basesparaserunlider/basesparaserunlider';
import { TestdeliderazgoPage } from '../testdeliderazgo/testdeliderazgo';
import { PoniendoenpracticaliderazgoPage } from '../poniendoenpracticaliderazgo/poniendoenpracticaliderazgo';
import { CaracteristicasdeliderPage } from '../caracteristicasdelider/caracteristicasdelider';


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

  basesparaserunlider(){
    this.navCtrl.push(BasesparaserunliderPage);
  }

  testdeliderazgo(){
    this.navCtrl.push(TestdeliderazgoPage);
  }

  poniendoenpracticaliderazgo(){
    this.navCtrl.push(PoniendoenpracticaliderazgoPage);
  }

  caracteristicasdeunlider(){
    this.navCtrl.push(CaracteristicasdeliderPage);
  }
}
