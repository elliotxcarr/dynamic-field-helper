import { Component, inject } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tabs',
  imports: [RouterOutlet],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css'
})
export class Tabs {
  private router = inject(Router);

    setTab(tabname: string) {
        this.router.navigate([`/${tabname}`]);
      }
}
