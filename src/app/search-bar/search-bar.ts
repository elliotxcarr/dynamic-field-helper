import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { StateStore } from '../store/helper.store';

@Component({
  selector: 'app-search-bar',
  imports: [NgFor, NgIf],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  readonly store = inject(StateStore)
}
