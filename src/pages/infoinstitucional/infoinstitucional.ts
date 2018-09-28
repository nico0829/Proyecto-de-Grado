import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoinstitucionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infoinstitucional',
  templateUrl: 'infoinstitucional.html',
})
export class InfoinstitucionalPage {
  public userID: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userID = this.navParams.get('userID');
    console.log(this.userID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoinstitucionalPage');
  }

}
