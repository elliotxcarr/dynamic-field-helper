import { Routes } from '@angular/router';
import { Operational } from './operational/operational';
import { PositionWeather } from './position-weather/position-weather';
import { Power } from './power/power';
import { Bunker } from './bunker/bunker';
import { Stock } from './stock/stock';

export const routes: Routes = [
    { path: 'operational', component: Operational },
    { path: 'position-weather', component: PositionWeather },
    { path: 'power', component: Power },
    { path: 'bunker', component: Bunker},
    { path: 'stock', component: Stock},
    {path: '', redirectTo:'/operational', pathMatch:'full'},
    {path: '**', redirectTo: ''}
];
