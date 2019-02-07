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
import { DilemasyAproxPage } from '../pages/dilemasy-aprox/dilemasy-aprox';
import { ElhombreserlibrePage } from '../pages/elhombreserlibre/elhombreserlibre';
import { ResponsabilidadPage } from '../pages/responsabilidad/responsabilidad';
import { EnbuscadelafuentebienmalPage } from '../pages/enbuscadelafuentebienmal/enbuscadelafuentebienmal';
import { LaconcienciamoralPage } from '../pages/laconcienciamoral/laconcienciamoral';
import { EticayciudadaniaPage } from '../pages/eticayciudadania/eticayciudadania';
import { DiezsituadedilemaseticosPage } from '../pages/diezsituadedilemaseticos/diezsituadedilemaseticos';
import { MotivoasociacionhumanaPage } from '../pages/motivoasociacionhumana/motivoasociacionhumana';
import { EstadodeanimoyrelacionhumPage } from '../pages/estadodeanimoyrelacionhum/estadodeanimoyrelacionhum';
import { liderazgoPage } from '../pages/liderazgo/liderazgo';
import { FilosofiadelliderazgoPage } from '../pages/filosofiadelliderazgo/filosofiadelliderazgo';
import { QueesliderazgoPage } from '../pages/queesliderazgo/queesliderazgo';
import { LidernaceosehacePage } from '../pages/lidernaceosehace/lidernaceosehace';
import { ConsistelabordeliderPage } from '../pages/consistelabordelider/consistelabordelider';
import { TipodeliderazgoPage } from '../pages/tipodeliderazgo/tipodeliderazgo';
import { LidercarisimoPage } from '../pages/lidercarisimo/lidercarisimo';
import { RiesgosacaerPage } from '../pages/riesgosacaer/riesgosacaer';
import { BasesparaserunliderPage } from '../pages/basesparaserunlider/basesparaserunlider';
import { TestdeliderazgoPage } from '../pages/testdeliderazgo/testdeliderazgo';
import { PoniendoenpracticaliderazgoPage } from '../pages/poniendoenpracticaliderazgo/poniendoenpracticaliderazgo';
import { CaracteristicasdeliderPage } from '../pages/caracteristicasdelider/caracteristicasdelider';
import { CameraqrPage } from '../pages/cameraqr/cameraqr';

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
    EticaymoralPage,
    DilemasyAproxPage,
    ElhombreserlibrePage,
    ResponsabilidadPage,
    EnbuscadelafuentebienmalPage,
    LaconcienciamoralPage,
    EticayciudadaniaPage,
    DiezsituadedilemaseticosPage,
    MotivoasociacionhumanaPage,
    EstadodeanimoyrelacionhumPage,
    liderazgoPage,
    FilosofiadelliderazgoPage,
    QueesliderazgoPage,
    LidernaceosehacePage,
    ConsistelabordeliderPage,
    TipodeliderazgoPage,
    LidercarisimoPage,
    RiesgosacaerPage,
    BasesparaserunliderPage,
    TestdeliderazgoPage,
    PoniendoenpracticaliderazgoPage,
    CaracteristicasdeliderPage,
    CameraqrPage
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
    EticaymoralPage,
    DilemasyAproxPage,
    ElhombreserlibrePage,
    ResponsabilidadPage,
    EnbuscadelafuentebienmalPage,
    LaconcienciamoralPage,
    EticayciudadaniaPage,
    DiezsituadedilemaseticosPage,
    MotivoasociacionhumanaPage,
    EstadodeanimoyrelacionhumPage,
    liderazgoPage,
    FilosofiadelliderazgoPage,
    QueesliderazgoPage,
    LidernaceosehacePage,
    ConsistelabordeliderPage,
    TipodeliderazgoPage,
    LidercarisimoPage,
    RiesgosacaerPage,
    BasesparaserunliderPage,
    TestdeliderazgoPage,
    PoniendoenpracticaliderazgoPage,
    CaracteristicasdeliderPage,
    CameraqrPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

