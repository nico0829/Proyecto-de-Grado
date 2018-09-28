import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoinstitucionalPage } from '../infoinstitucional/infoinstitucional';
import { ValoresInstitucionalesPage } from '../valores-institucionales/valores-institucionales';
import { ReglamentoestudiantilPage } from '../reglamentoestudiantil/reglamentoestudiantil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }

  InfoInstitucional(){
    this.navCtrl.push(InfoinstitucionalPage);
  }

  ValoresInstitu(){
    this.navCtrl.push(ValoresInstitucionalesPage);
  }

  ReglamentoEstu(){
    this.navCtrl.push(ReglamentoestudiantilPage);
  }
}


