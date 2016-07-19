import {Component} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {RarityChart} from '../rarity-chart/rarity-chart';

declare var AdMob: any;

@Component({
  templateUrl: 'build/pages/item-details/item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  private admobId: any;

  veryCommonMin: number;
  commonMin: number;
  uncommonMin: number;
  rareMin: number;
  veryRareMin: number;
  ultraRareMin: number;
  specialMin: number;


  constructor(private nav: NavController, navParams: NavParams, private platform: Platform) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('pokemon');
    this.veryCommonMin = 1.96;
    this.commonMin = 0.97;
    this.uncommonMin = 0.47;
    this.rareMin = 0.22;
    this.veryRareMin = 0.09;
    this.ultraRareMin = 0.04;
    this.specialMin = 0.02;

    //Admob logic
    this.platform = platform;
    if(/(android)/i.test(navigator.userAgent)) {
        this.admobId = {
            banner: 'ca-app-pub-xxx/yyy',
            interstitial: 'ca-app-pub-jjj/kkk'
        };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        this.admobId = {
            banner: 'ca-app-pub-ddd/sss',
            interstitial: 'ca-app-pub-ppp/zzz'
        };
    }
  }

  itemTapped(event) {
    this.nav.push(RarityChart);
  }

  //ADMOB LOGIC
  createBanner() {
      this.platform.ready().then(() => {
          if(AdMob) {
              AdMob.createBanner({
                  adId: this.admobId.banner,
                  autoShow: false
              });
          }
      });
  }

    showInterstitial() {
        this.platform.ready().then(() => {
            if(AdMob) {
                AdMob.prepareInterstitial({
                    adId: this.admobId.interstitial,
                    autoShow: true
                });
            }
        });
    }
 
    showBanner(position) {
        this.platform.ready().then(() => {
            if(AdMob) {
                var positionMap = {
                    "bottom": AdMob.AD_POSITION.BOTTOM_CENTER,
                    "top": AdMob.AD_POSITION.TOP_CENTER
                };
                AdMob.showBanner(positionMap[position.toLowerCase()]);
            }
        });
    }
 
    hideBanner(position) {
        this.platform.ready().then(() => {
            if(AdMob) {
                AdMob.hideBanner();
            }
        });
    }
}
