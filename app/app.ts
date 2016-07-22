import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav, Config} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {ListPage} from './pages/list/list';
import {RarityChart} from './pages/rarity-chart/rarity-chart';


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = ListPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Pokémon', component: ListPage },
      { title: 'Rarity Chart', component: RarityChart}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      var admobid = {};
      // Init Ad Id for IOS
      admobid = {
          banner: 'ca-app-pub-3940256099942544/2934735716',
          interstitial: 'ca-app-pub-3940256099942544/4411468910'
      };
      
    if(AdMob) AdMob.createBanner({
      adId: admobid.banner,
      position: AdMob.AD_POSITION.TOP_CENTER,
      autoShow: true });

    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
