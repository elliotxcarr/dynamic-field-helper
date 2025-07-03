import { NgFor, NgIf } from '@angular/common';
import { Component, computed, inject, Signal } from '@angular/core';
import { StateStore } from '../store/helper.store';
import { Field } from '../data/fields';
import { filterByTab } from '../shared/helpers';

@Component({
  selector: 'app-position-weather',
  imports: [NgFor, NgIf],
  templateUrl: './position-weather.html',
  styleUrl: './position-weather.css'
})
export class PositionWeather {
  readonly store = inject(StateStore);
  fields: Signal<Field[]> = this.store.positionWeather
  seaWater = computed(() => filterByTab(this.fields, 'Sea Water'));
  wind = computed(() => filterByTab(this.fields, 'Wind'));
  currentsSeaWater = computed(() => filterByTab(this.fields, 'Currents and Sea Water'));
  showTooltip = false;

  enableTooltip(){
    this.showTooltip = !this.showTooltip
  }
}
