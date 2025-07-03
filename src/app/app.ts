import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Tabs } from './tabs/tabs';
import { Dropdown } from "./dropdown/dropdown";
import { StateStore } from './store/helper.store';

@Component({
  selector: 'app-root',
  imports: [Tabs, Dropdown],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'dynamic-field-helper';
  reports = ['sea', 'port', 'anchor', 'maneuvering', 'all'];
  vessels = ['bulker', 'tanker', 'car', 'container', 'lng', 'cruise', 'tug', 'all'];

  readonly store = inject(StateStore);
}
