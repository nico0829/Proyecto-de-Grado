import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RelachumanasPage } from '../relachumanas/relachumanas';
import { ImportanciarelachumanasPage } from '../importanciarelachumanas/importanciarelachumanas';
import { SerhumanentesocialPage } from '../serhumanentesocial/serhumanentesocial';
import { RelahumanandrelapublicPage } from '../relahumanandrelapublic/relahumanandrelapublic';
import { CortesiaybuenosmodalesPage } from '../cortesiaybuenosmodales/cortesiaybuenosmodales';
import { ClasificacionrelacihumPage } from '../clasificacionrelacihum/clasificacionrelacihum';
import { OrdenjerarquiconecesidadesPage } from '../ordenjerarquiconecesidades/ordenjerarquiconecesidades';
import { CausaproblhumanosPage } from '../causaproblhumanos/causaproblhumanos';
import { EstadodeanimoPage } from '../estadodeanimo/estadodeanimo';
import { MotivoasociacionhumanaPage } from '../motivoasociacionhumana/motivoasociacionhumana';
import { EstadodeanimoyrelacionhumPage } from '../estadodeanimoyrelacionhum/estadodeanimoyrelacionhum';

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

  RelacionHumanasypublicas(){
    this.navCtrl.push(RelahumanandrelapublicPage);
  }

  Cortesiaybuenosmodales(){
    this.navCtrl.push(CortesiaybuenosmodalesPage);
  }

  ClasificaRelaHuman(){
    this.navCtrl.push(ClasificacionrelacihumPage);
  }

  OrdenJerarNecesidades(){
    this.navCtrl.push(OrdenjerarquiconecesidadesPage);
  }

  CausaProblemRelaHuman(){
    this.navCtrl.push(CausaproblhumanosPage);
  }

  Estadodeanimo(){
    this.navCtrl.push(EstadodeanimoPage);
  }

  MotivoAsociacionHumana(){
    this.navCtrl.push(MotivoasociacionhumanaPage);
  }

  EstadodeAnimoRelacionHum(){
    this.navCtrl.push(EstadodeanimoyrelacionhumPage);
  }

}
