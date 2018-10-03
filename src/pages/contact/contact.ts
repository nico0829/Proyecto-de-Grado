import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RelachumanasPage } from '../relachumanas/relachumanas';
import { ImportanciarelachumanasPage } from '../importanciarelachumanas/importanciarelachumanas';
import { SerhumanentesocialPage } from '../serhumanentesocial/serhumanentesocial';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  RelacionHumanas(){
    this.navCtrl.push(RelachumanasPage);
  }

  ImportRelacionHumanas(){
    this.navCtrl.push(ImportanciarelachumanasPage);
  }

  SerHumanoEnteSocial(){
    this.navCtrl.push(SerhumanentesocialPage);
  }

}
