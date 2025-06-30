import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Tabs } from './tabs/tabs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tabs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'dynamic-field-helper';
}
