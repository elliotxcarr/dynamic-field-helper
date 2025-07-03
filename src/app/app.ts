import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Tabs } from './tabs/tabs';
import { ReportTypes } from './report-types/report-types';
import { VesselTypes } from './vessel-types/vessel-types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tabs, ReportTypes, VesselTypes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'dynamic-field-helper';
}
