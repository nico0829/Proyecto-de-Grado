import { Component } from '@angular/core';

import { InicioPage } from '../inicio/inicio';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InicioPage;
  tab2Root = HomePage;
  tab3Root = ContactPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
