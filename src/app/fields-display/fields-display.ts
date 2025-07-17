import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject} from '@angular/core';
import { StateStore } from '../store/helper.store';

@Component({
  selector: 'app-fields-display',
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './fields-display.html',
  styleUrl: './fields-display.css'
})
export class FieldsDisplay {
  readonly store = inject(StateStore);
  showInfo: boolean = false;

}
