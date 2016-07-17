import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/item-details/item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  veryCommonMin: number;
  commonMin: number;
  rareMin: number;
  veryRareMin: number;
  ultraRareMin: number;
  epicMin: number;
  specialMin: number;


  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('pokemon');
    this.veryCommonMin = 1.96;
    this.commonMin = 0.97;
    this.rareMin = 0.47;
    this.veryRareMin = 0.22;
    this.ultraRareMin = 0.09;
    this.epicMin = 0.04;
    this.specialMin = 0.02;
  }
}
