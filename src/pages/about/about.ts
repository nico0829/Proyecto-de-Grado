import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EticaymoralPage } from '../eticaymoral/eticaymoral';
import { DilemasyAproxPage } from '../dilemasy-aprox/dilemasy-aprox';
import { ElhombreserlibrePage } from '../elhombreserlibre/elhombreserlibre';
import { ResponsabilidadPage } from '../responsabilidad/responsabilidad';
import { EnbuscadelafuentebienmalPage } from '../enbuscadelafuentebienmal/enbuscadelafuentebienmal';
import { LaconcienciamoralPage } from '../laconcienciamoral/laconcienciamoral';
import { EticayciudadaniaPage } from '../eticayciudadania/eticayciudadania';
import { DiezsituadedilemaseticosPage } from '../diezsituadedilemaseticos/diezsituadedilemaseticos';



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

  DilemayAprox(){
    this.navCtrl.push(DilemasyAproxPage);
  }

  ElHombreSerLibre(){
    this.navCtrl.push(ElhombreserlibrePage);
  }

  Responsabilidad(){
    this.navCtrl.push(ResponsabilidadPage);
  }

  EnBuscadelaFuente(){
    this.navCtrl.push(EnbuscadelafuentebienmalPage);
  }

  LaConcienciaMoral(){
    this.navCtrl.push(LaconcienciamoralPage);
  }

  EticayCiudadania(){
    this.navCtrl.push(EticayciudadaniaPage);
  }

  DiezSituacionesDilemasEticos(){
    this.navCtrl.push(DiezsituadedilemaseticosPage);
  }

}
