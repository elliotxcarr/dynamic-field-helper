import { NgFor } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  imports: [NgFor],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css'
})
export class Dropdown {
  @Input() filters!: string[];
  @Input() sendFunction!: (value: string) => void;
}
