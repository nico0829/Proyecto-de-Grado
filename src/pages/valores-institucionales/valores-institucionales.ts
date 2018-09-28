import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LetrahimnoPage } from '../letrahimno/letrahimno';

@IonicPage()
@Component({
  selector: 'page-valores-institucionales',
  templateUrl: 'valores-institucionales.html',
})
export class ValoresInstitucionalesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValoresInstitucionalesPage');
  }

  LetraHimno(){
    this.navCtrl.push(LetrahimnoPage);
  }
}
