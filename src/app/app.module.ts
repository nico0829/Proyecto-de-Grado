import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InfoinstitucionalPage } from '../pages/infoinstitucional/infoinstitucional';
import { ValoresInstitucionalesPage } from '../pages/valores-institucionales/valores-institucionales';
import { ReglamentoestudiantilPage } from '../pages/reglamentoestudiantil/reglamentoestudiantil';
import { InicioPage } from '../pages/inicio/inicio';
import { MasinfoPage } from '../pages/masinfo/masinfo';
import { PagprincipalPage } from '../pages/pagprincipal/pagprincipal';
import { LetrahimnoPage } from '../pages/letrahimno/letrahimno';
import { RelachumanasPage } from '../pages/relachumanas/relachumanas';
import { ImportanciarelachumanasPage } from '../pages/importanciarelachumanas/importanciarelachumanas';
import { SerhumanentesocialPage } from '../pages/serhumanentesocial/serhumanentesocial';
import { RelahumanandrelapublicPage } from '../pages/relahumanandrelapublic/relahumanandrelapublic';
import { CortesiaybuenosmodalesPage } from '../pages/cortesiaybuenosmodales/cortesiaybuenosmodales';
import { ClasificacionrelacihumPage } from '../pages/clasificacionrelacihum/clasificacionrelacihum';
import { OrdenjerarquiconecesidadesPage } from '../pages/ordenjerarquiconecesidades/ordenjerarquiconecesidades';
import { CausaproblhumanosPage } from '../pages/causaproblhumanos/causaproblhumanos';
import { EstadodeanimoPage } from '../pages/estadodeanimo/estadodeanimo';
import { EticaymoralPage } from '../pages/eticaymoral/eticaymoral';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InfoinstitucionalPage,
    ValoresInstitucionalesPage,
    ReglamentoestudiantilPage,
    InicioPage,
    MasinfoPage,
    PagprincipalPage,
    LetrahimnoPage,
    RelachumanasPage,
    ImportanciarelachumanasPage,
    SerhumanentesocialPage,
    RelahumanandrelapublicPage,
    CortesiaybuenosmodalesPage,
    ClasificacionrelacihumPage,
    OrdenjerarquiconecesidadesPage,
    CausaproblhumanosPage,
    EstadodeanimoPage,
    EticaymoralPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InfoinstitucionalPage,
    ValoresInstitucionalesPage,
    ReglamentoestudiantilPage,
    InicioPage,
    MasinfoPage,
    PagprincipalPage,
    LetrahimnoPage,
    RelachumanasPage,
    ImportanciarelachumanasPage,
    SerhumanentesocialPage,
    RelahumanandrelapublicPage,
    CortesiaybuenosmodalesPage,
    ClasificacionrelacihumPage,
    OrdenjerarquiconecesidadesPage,
    CausaproblhumanosPage,
    EstadodeanimoPage,
    EticaymoralPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

