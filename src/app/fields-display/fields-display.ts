import { NgFor } from '@angular/common';
import { Component, computed, inject, Signal } from '@angular/core';
import { StateStore } from '../store/helper.store';

@Component({
  selector: 'app-fields-display',
  imports: [NgFor],
  templateUrl: './fields-display.html',
  styleUrl: './fields-display.css'
})
export class FieldsDisplay {
  readonly store = inject(StateStore);
}
