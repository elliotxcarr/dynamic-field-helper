export interface Field{
    name: string,
    type:string, 
    tab: string,
    section:string,
    vesselTypes: string[],
    reportTypes: string[],
    info?: string;
    showInfo?: boolean
}
export const allFields: Field[] =[
    //operational
    {
        name:'Report Number',
        type: 'number',
        tab: 'operational',
        section: 'Vessel Details',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes:  ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name:'Voyage Number',
        type: 'number',
        tab: 'operational',
        section: 'Vessel Details',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name: 'Instructed Speed',
        type: 'number',
        tab: 'operational',
        section: 'Vessel Details',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name: 'Instructed FOC',
        type: 'number',
        tab: 'operational',
        section: 'Vessel Details',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'CP Speed',
        type: 'number',
        tab: 'operational',
        section: 'Vessel Details',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical'],
        reportTypes: ['sea', 'maneuvering']
    },
    {
        name:'CP Fuel',
        type: 'number',
        tab: 'operational',
        section: 'Vessel Details',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical'],
        reportTypes: ['sea']
    },
    {
        name:'Other Speed Steaming',
        type: 'text/dropdown',
        tab: 'operational',
        section: 'Vessel Details',
        vesselTypes: ['chemical'],
        reportTypes: ['sea']
    },
    {
        name:'Report From',
        type: 'date',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name:'EOSP',
        type: 'date',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'Report To',
        type: 'date',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['anchor', 'port', 'sea', 'maneuvering'],
        info: 'Report To changes to EOSP when the EOSP checlbox is is ticked',
        showInfo: false
    },
    {
        name:'Report Creation',
        type: 'date',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name:'Timezone',
        type: 'text',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name:'Previous Timezone',
        type: 'text',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name:'Report Period',
        type: 'number',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name:'Time on Passage',
        type: 'number',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'container'],
        reportTypes: ['sea']
    },
    {
        //Not sure about this one
        name:'Time Sailed',
        type: 'number',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['anchor', 'sea', 'maneuvering']
    },
    {
        name:'Displacement',
        type: 'number',
        tab: 'operational',
        section: 'Stability Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'chemical'],
        reportTypes: ['sea', 'maneuvering']
    },
    {
        name:'GM Reserve',
        type: 'number',
        tab: 'operational',
        section: 'Stability Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'chemical',],
        reportTypes: ['anchor', 'port','maneuvering']
    },
    {
        name:'Dead Weight Reserve',
        type: 'number',
        tab: 'operational',
        section: 'Stability Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'chemical',],
        reportTypes: [ 'anchor','port', 'maneuvering']
    },
    {
        name:'Constant Weight',
        type: 'number',
        tab: 'operational',
        section: 'Stability Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', ],
        reportTypes: ['sea', 'maneuvering']
    },
    {
        name:'Fresh Water / Domestic',
        type: 'number',
        tab: 'operational',
        section: 'Pool Specific Fields',
        vesselTypes: ['chemical','tanker'],
        reportTypes: ['sea', 'port']
    },
    {
        name:'Fresh Water / Tank Cleaning',
        type: 'number',
        tab: 'operational',
        section: 'Pool Specific Fields',
        vesselTypes: ['chemical','tanker'],
        reportTypes: ['sea', 'port']
    },
    {
        name:'Slops / Residual Tanks',
        type: 'number',
        tab: 'operational',
        section: 'Pool Specific Fields',
        vesselTypes: ['chemical','tanker'],
        reportTypes: ['sea', 'port']
    },
    {
        name:'Slops / Slop Tanks',
        type: 'number',
        tab: 'operational',
        section: 'Pool Specific Fields',
        vesselTypes: ['chemical','tanker'],
        reportTypes: ['sea', 'port']
    },
    {
        name:'Total Interface / Oil',
        type: 'number',
        tab: 'operational',
        section: 'Pool Specific Fields',
        vesselTypes: ['chemical','tanker'],
        reportTypes: ['sea', 'port']
    },
    {
        name:'Total Interface / Water',
        type: 'number',
        tab: 'operational',
        section: 'Pool Specific Fields',
        vesselTypes: ['chemical','tanker'],
        reportTypes: ['sea', 'port']
    },
    {
        name:'First Line',
        type: 'date',
        tab: 'operational',
        section: 'Pool Specific Fields',
        vesselTypes: ['chemical','tanker'],
        reportTypes: ['sea', 'port']
    },
    {
        name:'Gangway Down',
        type: 'date',
        tab: 'operational',
        section: 'Pool Specific Fields',
        vesselTypes: ['chemical','tanker'],
        reportTypes: ['sea', 'port']
    },
    {
        name:'Cargo Docs Onboard',
        type: 'date',
        tab: 'operational',
        section: 'Pool Specific Fields',
        vesselTypes: ['chemical','tanker'],
        reportTypes: ['sea', 'port']
    },
    {
        name:'Port Name',
        type: 'text',
        tab: 'operational',
        section: 'Port',
        vesselTypes: ['bulk', 'tanker', 'car', 'container',  'cruise'],
        reportTypes: ['anchor']
    },
    {
        name:'Port Name',
        type: 'text',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical',  'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Latitude Degrees',
        type: 'number',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Latitude Minutes',
        type: 'number',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Latitude Seconds',
        type: 'number',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Latitude North/South',
        type: 'text/dropdown',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Longitude Degrees',
        type: 'number',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Longitude Minutes',
        type: 'number',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Longitude Seconds',
        type: 'number',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Longitude East/West',
        type: 'text/dropdown',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Captain Name',
        type: 'text',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['port', 'sea', 'anchor', 'maneuvering']
    },
    {
        name:'Chief Engineer',
        type: 'text',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['port', 'sea', 'anchor', 'maneuvering']
    },
    {
        name:'Awaiting Orders',
        type: 'checkbox',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container',  'cruise'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Cargo Weight',
        type: 'number',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical'],
        reportTypes: ['port']
    },
    {
        name:'Operating Code',
        type: 'text',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'Loading Condition',
        type: 'text',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical'],
        reportTypes: ['sea']
    },
    {
        name:'Routing Advice Followed',
        type: 'checkbox',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['tanker', 'chemical'],
        reportTypes: ['sea']
    },
    {
        name:'Next Port',
        type: 'text',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container',  'cruise'],
        reportTypes: ['maneuvering']
    },
    {
        name:'ETA',
        type: 'date',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container',  'cruise'],
        reportTypes: ['maneuvering']
    },
    {
        name:'ETA Timezone',
        type: 'text',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container',  'cruise'],
        reportTypes: ['maneuvering']
    },
    {
        name:'ETD',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'chemical', 'container', ],
        reportTypes: ['port']
    },
    {
        name:'NOR Tendered',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'chemical', 'container', ],
        reportTypes: ['port']
    },
    {
        name:'All Fast',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'chemical', 'container', ],
        reportTypes: ['port']
    },
    {
        name:'Hoses Connected',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['tanker', 'chemical',],
        reportTypes: ['port']
    },
    {
        name:'Commence Load',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'chemical', 'container', ],
        reportTypes: ['port']
    },
    {
        name:'Finish Load',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'chemical', 'container', ],
        reportTypes: ['port']
    },
    {
        name:'Hoses Disconnected',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['tanker', 'chemical', ],
        reportTypes: ['port']
    },
    {
        name:'Last Line',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'chemical', 'container', ],
        reportTypes: ['port']
    },
    {
        name:'Start Ballasting',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'container'],
        reportTypes: ['port']
    },
    {
        name:'Pilot Disembarked',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'container'],
        reportTypes: ['port']
    },
    {
        name:'Pilot Onboard',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'container'],
        reportTypes: ['port']
    },
    {
        name:'Start Deballasting',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'container'],
        reportTypes: ['port']
    },
    {
        name:'End Deballasting',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'container'],
        reportTypes: ['port']
    },
    {
        name:'Cargo Docs Onboard',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'chemical', 'container'],
        reportTypes: ['port']
    },
    {
        name:'Start Discharging',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'chemical', 'container', ],
        reportTypes: ['port']
    },
    {
        name:'End Discharging',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'chemical', 'container', ],
        reportTypes: ['port']
    },
    {
        name:'Completed Tank Inspection',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'chemical', 'container', ],
        reportTypes: ['port']
    },
    {
        name:'Awaiting Orders',
        type: 'checkbox',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'EOSP',
        type: 'checkbox',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'Next Port',
        type: 'text',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'ETA',
        type: 'date',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'ETA Timezone',
        type: 'text',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'COSP',
        type: 'date',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker','car', 'container', 'chemical', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'Previously in ECA',
        type: 'boolean',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'Enter ECA',
        type: 'date',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical'],
        reportTypes: ['sea']
    },
    {
        name:'Exit ECA',
        type: 'date',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical'],
        reportTypes: ['sea']
    },
    {
        name:'Time in ECA',
        type: 'date',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical'],
        reportTypes: ['sea']
    },
    {
        name:'In ECA',
        type: 'boolean',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['sea']
    },
    // {
    //     name:'Arrival Port',
    //     type: 'text',
    //     tab: 'operational',
    //     section: 'Voyage Itinerary',
    //     vesselTypes: ['bulk', 'tanker', 'car', 'container', ],
    //     reportTypes: ['sea']
    // },
    {
        name:'ETD',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', ],
        reportTypes: ['anchor']
    },
    {
        name:'NOR Tendered',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', ],
        reportTypes: ['anchor']
    },
    {
        name:'Time for 1 hr Notice',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stamp',
        vesselTypes: ['bulk', 'tanker', ],
        reportTypes: ['anchor']
    },
    {
        name:'Main Engine Stand By',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', ],
        reportTypes: ['anchor']
    },
    {
        name:'Finish with Engines',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', ],
        reportTypes: ['anchor']
    },
    {
        name:'Anchored',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', ],
        reportTypes: ['anchor']
    },
    {
        name:'Anchor Heaved',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', ],
        reportTypes: ['anchor']
    },
    {
        name:'Total Time of Anchor',
        type: 'number',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', ],
        reportTypes: ['anchor']
    },
    {
        name:'Commenced Drifting',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stanp',
        vesselTypes: ['bulk', 'tanker', 'car', ],
        reportTypes: ['anchor']
    },
    {
        name:'Completed Drifting',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stanp',
        vesselTypes: ['bulk', 'tanker', 'car', ],
        reportTypes: ['anchor']
    },
    {
        name:'Operation',
        type: 'text',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'car', 'container',  'cruise'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Departure Port Name',
        type: 'text',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'car', 'container',  'cruise'],
        reportTypes: ['maneuvering']
    },
    {
        name:'ETD',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['tanker', 'container', ],
        reportTypes: ['maneuvering']
    },
    {
        name:'NOR Tendered',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', ],
        reportTypes: ['maneuvering']
    },
    {
        name:'Time for 1 hr Notice',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'container', ],
        reportTypes: ['maneuvering']
    },
    {
        name:'Pilot Onboard',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker','car', 'container', ],
        reportTypes: ['maneuvering']
    },
    {
        name:'Last Line Onboard',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker','car', 'container', ],
        reportTypes: ['maneuvering']
    },
    {
        name:'Pilot Disembarked',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker','car', 'container', ],
        reportTypes: ['maneuvering']
    },
    {
        name:'Anchor Heaved',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker','car', 'container', ],
        reportTypes: ['maneuvering']
    },
    {
        name:'COSP',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker','car', 'container',  ],
        reportTypes: ['maneuvering']
    },
    {
        name:'Previously in ECA',
        type: 'boolean',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker','car', 'container',  'cruise'],
        reportTypes: ['maneuvering']
    },
    {
        name:'All Fast',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker','car', 'container', ],
        reportTypes: ['maneuvering']
    },
    {
        name:'Anchored',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker','car', 'container', ],
        reportTypes: ['maneuvering']
    },
    {
        name:'Berthing Time',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'container', ],
        reportTypes: ['maneuvering']
    },
    {
        name:'Enter ECA',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', ],
        reportTypes: ['maneuvering']
    },
    {
        name:'Exit ECA',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', ],
        reportTypes: ['maneuvering']
    },
    {
        name:'Time in ECA',
        type: 'number',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', ],
        reportTypes: ['maneuvering']
    },
    {
        name:'In ECA',
        type: 'boolean',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'car', 'container',  'cruise'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Report Type',
        type: 'text/dropdown',
        tab: 'operational',
        section: 'Type of Report',
        vesselTypes: ['bulk', 'tanker', 'car', 'container',  'cruise'],
        reportTypes: ['anchor']
    },
    {
        name:'Reefer Containers (20ft)',
        type: 'number',
        tab: 'operational',
        section: 'Containers',
        vesselTypes: ['container'],
        reportTypes: ['port', 'sea', 'anchor', 'maneuvering']
    },
    {
        name:'Reefer Containers (40ft)',
        type: 'number',
        tab: 'operational',
        section: 'Containers',
        vesselTypes: ['container'],
        reportTypes: ['port', 'sea', 'anchor', 'maneuvering']
    },
    {
        name:'Normal Containers (20ft)',
        type: 'number',
        tab: 'operational',
        section: 'Containers',
        vesselTypes: ['container'],
        reportTypes: ['port', 'sea', 'anchor', 'maneuvering']
    },
    {
        name:'Normal Containers (40ft)',
        type: 'number',
        tab: 'operational',
        section: 'Containers',
        vesselTypes: ['container'],
        reportTypes: ['port', 'sea', 'anchor', 'maneuvering']
    },
    {
        name:'Type of Operation',
        type: 'text/dropdown',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Location',
        type: 'text/dropdown',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Tugs All Fast',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', ],
        reportTypes: ['port', 'maneuvering']
    },
    {
        name:'Tugs Last Line',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', ],
        reportTypes: ['port', 'maneuvering']
    },
    {
        name:'Draught Forward',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['sea', 'anchor', 'maneuvering']
    },
    {
        name:'Draught Aft',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['sea', 'anchor', 'maneuvering']
    },
    {
        name:'Trim',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical', 'cruise'],
        reportTypes: ['sea', 'anchor', 'maneuvering']
    },
    {
        name:'Ballast Water on Board',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical'],
        reportTypes: ['sea', 'port', 'anchor', 'maneuvering']
    },
    {
        name:'Fixed Ballast',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', ],
        reportTypes: ['sea', 'anchor', 'maneuvering']
    },
    {
        name:'Ballast Water Intake',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'chemical',],
        reportTypes: ['anchor', 'port']
    },
    {
        name:'Ballast Water Discharged',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'chemical', ],
        reportTypes: [ 'anchor','port']
    },
    {
        name:'Ballast Water Sample Date',
        type: 'date',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'chemical'],
        reportTypes: [ 'anchor','port']
    },
    {
        name:'Ballast Water Count of Cells',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'chemical'],
        reportTypes: [ 'anchor','port']
    },
    //'All Fast' Operating Conditions 
    {
        name:'Draught Forward (All Fast)',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions/Draught',
        vesselTypes: ['bulk', 'tanker','car', 'container',  'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Draught Aft (All Fast)',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions/Draught',
        vesselTypes: ['bulk', 'tanker','car', 'container',  'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Trim (All Fast)',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions/Draught',
        vesselTypes: ['bulk', 'tanker','car', 'container',  'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Awaiting Orders',
        type: 'checkbox',
        tab: 'operational',
        section: 'Next Port',
        vesselTypes: ['bulk', 'tanker', 'car', 'container','chemical', ],
        reportTypes: ['port']
    },
    {
        name:'Next Port',
        type: 'text',
        tab: 'operational',
        section: 'Next Port',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical',],
        reportTypes: ['port']
    },
    {
        name:'Remaining Distance',
        type: 'number',
        tab: 'operational',
        section: 'Next Port',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical',],
        reportTypes: ['port']
    },
    {
        name:'Remaining Time',
        type: 'number',
        tab: 'operational',
        section: 'Next Port',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical',],
        reportTypes: ['port']
    },
    {
        name:'Next Timezone',
        type: 'text/dropdown',
        tab: 'operational',
        section: 'Next Port',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical',],
        reportTypes: ['port']
    },
    {
        name:'ETA Pilot Station',
        type: 'date',
        tab: 'operational',
        section: 'Next Port',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'chemical',],
        reportTypes: ['port']
    },
    {
        name:'Number of Units',
        type: 'date',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: ['tanker', 'car', ],
        reportTypes: ['sea', 'maneuvering']
    },
    {
        name:'Container Size',
        type: 'text/dropdown',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: ['tanker', 'car', ],
        reportTypes: ['sea', 'maneuvering']
    },
    {
        name:'Default Unit Weight',
        type: 'number',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: ['tanker', 'car', ],
        reportTypes: ['sea', 'maneuvering']
    },
    {
        name:'Cargo Weight',
        type: 'number',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: ['bulk', 'tanker', 'container', 'car', 'chemical'],
        reportTypes: ['sea','anchor', 'maneuvering',]
    },
    {
        name:'Inspection Date',
        type: 'date',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: ['bulk', 'tanker', ],
        reportTypes: ['maneuvering']
    },
    {
        name:'Inspection Company',
        type: 'text',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: ['bulk', 'tanker', ],
        reportTypes: ['maneuvering']
    },
    {
        name:'Other Weight',
        type: 'number',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: ['tanker'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Default Unit Area',
        type: 'number',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: [],
        reportTypes: ['sea']
    },
    {
        name:'Dead Weight',
        type: 'number',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: ['tanker', 'container', ],
        reportTypes: ['sea']
    },
    {
        name:'Type',
        type: 'text',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: [ 'tanker', ],
        reportTypes: ['sea']
    },
    {
        name:'Lane Meters',
        type: 'number',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: [],
        reportTypes: ['sea']
    },
    {
        name:'Number of TEUs',
        type: 'number',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: [],
        reportTypes: ['sea']
    },
    {
        name:'No. of Passengers',
        type: 'number',
        tab: 'operational',
        section: 'Other Details',
        vesselTypes: ['cruise'],
        reportTypes: ['sea', 'port', 'anchor','maneuvering']
    },
    {
        name:'No. of Crew',
        type: 'number',
        tab: 'operational',
        section: 'Other Details',
        vesselTypes: ['cruise'],
        reportTypes: ['sea', 'port', 'anchor','maneuvering']
    },
    {
        name:'Shore Power',
        type: 'checkbox',
        tab: 'operational',
        section: 'Other Details',
        vesselTypes: ['cruise'],
        reportTypes: ['port', 'anchor']
    },
    {
        name:'kWh',
        type: 'number',
        tab: 'operational',
        section: 'Other Details',
        vesselTypes: ['cruise'],
        reportTypes: ['port', 'anchor']
    },
    {
        name:'Hours',
        type: 'number',
        tab: 'operational',
        section: 'Other Details',
        vesselTypes: ['cruise'],
        reportTypes: ['port', 'anchor']
    },
    {
        name:'Tank',
        type: '',
        tab: 'operational',
        section: 'Tank',
        vesselTypes: [],
        reportTypes: ['sea', 'port', 'anchor', 'maneuvering']
    },
    {
        name:'Pressure (bar)',
        type: '',
        tab: 'operational',
        section: 'Tank',
        vesselTypes: [],
        reportTypes: ['sea', 'port', 'anchor', 'maneuvering']
    },
    {
        name:'Mean Temp (C)',
        type: '',
        tab: 'operational',
        section: 'Tank',
        vesselTypes: [],
        reportTypes: ['sea', 'port', 'anchor', 'maneuvering']
    },
    //position and weather
    {
        name:'Sea Temperature',
        type: 'number',
        tab: 'position-weather',
        section: 'Sea Water',
        vesselTypes: ['bulk', 'tanker', 'car', ],
        reportTypes: ['anchor']
    },
    {
        name:'Apparent Wind Speed',
        type: 'number',
        tab: 'position-weather',
        section: 'Wind',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', ],
        reportTypes: ['sea']
    },
    {
        name:'Sea Swell',
        type: 'number',
        tab: 'position-weather',
        section: 'Currents and Sea Water',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', ],
        reportTypes: ['sea']
    },
]