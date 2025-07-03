import { Component, inject } from '@angular/core';
import { StateStore } from '../store/helper.store';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-vessel-types',
  imports: [NgClass,NgFor, FormsModule],
  templateUrl: './vessel-types.html',
  styleUrl: './vessel-types.css'
})
export class VesselTypes {
  readonly store = inject(StateStore)
  vesselTypes = ['bulker', 'tanker', 'car', 'container', 'lng', 'cruise', 'tug', 'all'];

}
