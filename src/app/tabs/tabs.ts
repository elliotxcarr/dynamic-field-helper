import { NgClass, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tabs',
  imports: [RouterOutlet, NgClass,NgFor],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css'
})
export class Tabs {
  private router = inject(Router);
  tabs = ['operational', 'position-weather', 'cargo-details', 'power', 'bunker', 'stock']
  selectedTab = 'operational';

  setTab(tabname: string) {
    this.selectedTab = tabname
    this.router.navigate([`/${tabname}`]);
  }
}
