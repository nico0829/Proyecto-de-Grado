import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { PagprincipalPage } from '../pages/pagprincipal/pagprincipal';
import { MasinfoPage } from '../pages/masinfo/masinfo';
import { InicioPage } from '../pages/inicio/inicio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;  
  public rootPage: any;
  public pages: Array<{ titulo: string, component: any, icon: string }>;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.rootPage = TabsPage;
    this.pages = [
      { titulo: 'Página Principal', component: PagprincipalPage, icon: 'home' },
      { titulo: 'Lector QR', component: InicioPage, icon: 'camera' },
      { titulo: 'Módulos', component: TabsPage, icon: 'filing' },
      { titulo: 'Más Info', component: MasinfoPage, icon: 'information-circle' }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }
}
