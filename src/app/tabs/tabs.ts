import { NgClass, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { StateStore } from '../store/helper.store';
import { FieldsDisplay } from "../fields-display/fields-display";

@Component({
  selector: 'app-tabs',
  imports: [NgClass, NgFor, FieldsDisplay],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css'
})
export class Tabs {
  readonly store = inject(StateStore);
  selectedTab = this.store.selectedTab();
}
