import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals'
import { Field, fields } from '../data/fields'
import { computed } from '@angular/core'
import { filterBySea, filterByTemplate } from '../data/templateTest'

export interface StateSlice {
  selectedReport: string,
  selectedVessel: string,
  selectedTab: string,
  reportTypes: string[],
  vesselTypes: string[],
  searchResults: Field[],
  searchedField: Field,
  fields: Field[],
}

export const initialStateSlice: StateSlice = {
  selectedReport: 'all',
  selectedVessel: 'all',
  selectedTab: 'operational',
  reportTypes: ['all', 'sea', 'port', 'anchor', 'maneuvering'],
  vesselTypes: ['all', 'bulk', 'tanker', 'car', 'container', 'lng', 'cruise', 'tug'],
  searchResults: [],
  searchedField: {} as Field,
  fields: fields
}

export const StateStore = signalStore(
  { providedIn: 'root' },
  withState(initialStateSlice),
  withComputed(store => {
    const filteredFields = computed(() => {
      const report = store.selectedReport();
      const vessel = store.selectedVessel();
      return store.fields().filter(f =>
        (report === 'all' ? f : f.reportTypes.includes(report)) &&
        (vessel === 'all' ? f : f.vesselTypes.includes(vessel))
      )
    })

    const tabMap: Record<string, string[]> = {
      sea: ['operational', 'position-weather', 'power', 'consumptions', 'stock'],
      port: ['operational', 'cargo-details', 'power', 'consumptions', 'bunker', 'stock'],
      anchor: ['operational', 'position-weather', 'power', 'consumptions', 'bunker', 'stock'],
      maneuvering: ['operational', 'position-weather', 'power', 'consumptions']
    }
    const tabNames = computed(() => {
      return tabMap[store.selectedReport()] ??
        ['operational', 'position-weather', 'cargo-details', 'power', 'consumptions', 'bunker', 'stock']
    })

    const filteredByTab = computed(() => filteredFields().filter(f => f.tab === store.selectedTab()));

    const sectionNames = computed(() => [...new Set(filteredByTab().map(f => f.section))]);

    return {
      filteredFields,
      sectionNames,
      filteredByTab,
      tabNames
    }
  }),
  withMethods((store) => {

    const searchForField = (input: string) => {
      if (!input) patchState(store, ({ searchedField: {} as Field }))

      patchState(store, ({
        searchResults: store.filteredFields().filter(f =>
          f.name.toLowerCase().includes(input.toLowerCase())
        )
      }))
    }

    return {
      setSelectedReportType: (selectedReport: string) => patchState(store, ({ selectedReport })),
      setSelectedVesselType: (selectedVessel: string) => patchState(store, ({ selectedVessel })),
      setSelectedTab: (selectedTab: string) => patchState(store, ({ selectedTab })),
      getSectionFields: (section: string): Field[] => store.filteredFields().filter(f => f.section === section),
      searchForField,
      setSearchedField: (field: Field) =>{ 
        patchState(store, 
          ({ searchedField: field }), 
          ({ selectedTab: field.tab }),
          ({searchResults: []})
        )
        const element = document.getElementById(field.name);
        element?.scrollIntoView();
        }
    }
  }),
  withHooks(() => ({
    onInit: () => {
      console.log(filterBySea);
      console.log(filterByTemplate)
    }
  }))
)