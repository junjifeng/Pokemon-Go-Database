import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';


@Component({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  pokemons: Object[];

  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.pokemons = [
      {name: 'Pikachu'}
    ];

  }

  itemTapped(event, pokemon) {
    this.nav.push(ItemDetailsPage, {
      pokemon: pokemon
    });
  }
}
