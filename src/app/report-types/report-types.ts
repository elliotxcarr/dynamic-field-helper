import { NgClass, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { StateStore } from '../store/helper.store';

@Component({
  selector: 'app-report-types',
  imports: [NgFor, NgClass],
  templateUrl: './report-types.html',
  styleUrl: './report-types.css'
})
export class ReportTypes {
  readonly store = inject(StateStore)
  reportTypes = ['sea', 'port', 'anchor', 'maneuvering', 'all']
}
