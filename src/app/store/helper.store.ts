import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals'
import { Field, fields } from '../data/fields'
import { computed } from '@angular/core'

export interface StateSlice {
    selectedReport: string,
    selectedVessel: string,
    selectedTab: string,
    reportTypes: string[],
    vesselTypes: string[],
    tabNames: string[],
    fields: Field[],
}

export const initialStateSlice: StateSlice = {
    selectedReport: 'all',
    selectedVessel: 'all',
    selectedTab: 'operational',
    reportTypes: [ 'all', 'sea', 'port', 'anchor', 'maneuvering'],
    vesselTypes: ['all', 'bulker', 'tanker', 'car', 'container', 'lng', 'cruise', 'tug'],
    tabNames: ['operational', 'position-weather', 'cargo-details', 'power', 'bunker', 'stock'],
    fields: fields
}

export const StateStore = signalStore(
    {providedIn: 'root'},
    withState(initialStateSlice),
    withComputed(store => {
        
        const filteredFields = computed(()=> {
            const report = store.selectedReport();
            const vessel = store.selectedVessel();
            const tab = store.selectedTab();

            return store.fields().filter(f => 
                f.tab === tab && 
                (report === 'all' ? f : f.reportTypes.includes(report)) &&
                (vessel === 'all' ? f : f.vesselTypes.includes(vessel))
            );
        });

        const sectionNames = computed(() => 
            [...new Set(
                filteredFields().map(f => f.section)
            )]
        )
        return {
            filteredFields,
            sectionNames
        }
    }),
    withMethods((store) => ({
        setSelectedReportType: (type: string) => patchState(store, ({selectedReport: type})),
        setSelectedVesselType: (type: string) => patchState(store, ({selectedVessel: type})),
        setSelectedTab: (tab: string) => patchState(store, ({selectedTab: tab})),
        getSectionFields: (section: string): Field[] => store.filteredFields().filter(f => f.section === section)
    }))
)