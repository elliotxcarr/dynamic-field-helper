import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals'
import { Field, fields } from '../data/fields'
import { computed } from '@angular/core'

export interface StateSlice {
    selectedReport: string,
    selectedVessel: string,
    fields: Field[],
}

export const initialStateSlice: StateSlice = {
    selectedReport: 'sea',
    selectedVessel: 'bulker',
    fields: fields
}

export const StateStore = signalStore(
    {providedIn: 'root'},
    withState(initialStateSlice),
    withComputed(store => {
        
        const filterReport = (tab:string)=> {
            return store.fields().filter(f => 
                f.tab === tab && 
                f.reportTypes.includes(store.selectedReport()) &&
                f.vesselTypes.includes(store.selectedVessel())
            )
        }
        return {
            operational: computed(()=> filterReport('operational')),
            positionWeather: computed(()=> filterReport('position-weather') ),
            cargoDetails: computed(()=> filterReport('cargo-details')),
            power: computed(()=> filterReport('power')),
            bunker: computed(()=> filterReport('bunker')),
            stock : computed(()=> filterReport('stock'))
        }
    }),
    withMethods((store) => ({
        setSelectedReportType: (type: string) => patchState(store, ({selectedReport: type})),
        setSelectedVesselType: (type: string) => {patchState(store, ({selectedVessel: type}))}
    }))
)