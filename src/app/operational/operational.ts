import { NgFor, NgIf } from '@angular/common';
import { Component, computed, inject, Signal } from '@angular/core';
import { Field} from '../data/fields';
import { StateStore } from '../store/helper.store';
import { filterByTab } from '../shared/helpers';

@Component({
  selector: 'app-operational',
  imports: [NgFor, NgIf],
  templateUrl: './operational.html',
  styleUrl: './operational.css'
})
export class Operational {
  readonly store = inject(StateStore)
  fields: Signal<Field[]> = this.store.operational
  vesselDetails = computed(() => filterByTab(this.fields, 'Vessel Details'));
  reportTime = computed(() => filterByTab(this.fields, 'Report Time'));
}
