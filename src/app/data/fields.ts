export interface Field{
    name: string,
    type:string, 
    tab: string,
    section:string,
    vesselTypes: string[],
    reportTypes: string[]
}
export const fields: Field[] =[
    //operational
    {
        name:'Report Number',
        type: 'number',
        tab: 'operational',
        section: 'Vessel Details',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes:  ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name:'Voyage Number',
        type: 'number',
        tab: 'operational',
        section: 'Vessel Details',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name: 'Instructed Speed',
        type: 'number',
        tab: 'operational',
        section: 'Vessel Details',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name: 'Instructed FOC',
        type: 'number',
        tab: 'operational',
        section: 'Vessel Details',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'CP Speed',
        type: 'number',
        tab: 'operational',
        section: 'Vessel Details',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['sea', 'maneuvering']
    },
    {
        name:'CP Fuel',
        type: 'number',
        tab: 'operational',
        section: 'Vessel Details',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['sea']
    },
    {
        name:'Report From',
        type: 'date',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name:'EOSP',
        type: 'date',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'Report To',
        type: 'date',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name:'Report Creation',
        type: 'date',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name:'Timezone',
        type: 'text',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name:'Previous Timezone',
        type: 'text',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name:'Report Period',
        type: 'number',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name:'Time on Passage',
        type: 'number',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: ['sea']
    },
    {
        //Not sure about this one
        name:'Time Sailed',
        type: 'number',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['anchor', 'sea', 'maneuvering']
    },
    {
        name:'Port Name',
        type: 'text',
        tab: 'operational',
        section: 'Port',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['anchor']
    },
    {
        name:'Port Name',
        type: 'text',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Latitude Degrees',
        type: 'number',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Latitude Minutes',
        type: 'number',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Latitude Seconds',
        type: 'number',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Latitude North/South',
        type: 'text',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Longitude Degrees',
        type: 'number',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Longitude Minutes',
        type: 'number',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Longitude Seconds',
        type: 'number',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Longitude East/West',
        type: 'text',
        tab: 'operational',
        section: 'Port and Position',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Captain Name',
        type: 'text',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['port', 'sea', 'anchor', 'maneuvering']
    },
    {
        name:'Chief Engineer',
        type: 'text',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['port', 'sea', 'anchor', 'maneuvering']
    },
    {
        name:'Awaiting Orders',
        type: 'checkbox',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Cargo Weight',
        type: 'number',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Operating Code',
        type: 'text',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'Loading Condition',
        type: 'text',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['sea']
    },
    {
        name:'Routing Advice Followed',
        type: 'checkbox',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['tanker'],
        reportTypes: ['sea']
    },
    {
        name:'Next Port',
        type: 'text',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['maneuvering']
    },
    {
        name:'ETA',
        type: 'date',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['maneuvering']
    },
    {
        name:'ETA Timezone',
        type: 'text',
        tab: 'operational',
        section: 'Miscellaneous',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['maneuvering']
    },
    {
        name:'ETD',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'NOR Tendered',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'All Fast',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'All Fast',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Hoses Connected',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['tanker', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Commence Load',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Finish Load',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Hoses Disconnected',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['tanker', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Last Line',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
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
        vesselTypes: ['bulk', 'container'],
        reportTypes: ['port']
    },
    {
        name:'Start Discharging',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'End Discharging',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Completed Tank Inspection',
        type: 'date',
        tab: 'operational',
        section: 'Port Operations Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Awaiting Orders',
        type: 'checkbox',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'EOSP',
        type: 'checkbox',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'Next Port',
        type: 'text',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'ETA',
        type: 'date',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'ETA Timezone',
        type: 'text',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'COSP',
        type: 'date',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker','car', 'container', 'lng', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'Previously in ECA',
        type: 'boolean',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'Enter ECA',
        type: 'date',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['sea']
    },
    {
        name:'Exit ECA',
        type: 'date',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['sea']
    },
    {
        name:'Time in ECA',
        type: 'date',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['sea']
    },
    {
        name:'In ECA',
        type: 'boolean',
        tab: 'operational',
        section: 'Voyage Itinerary',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['sea']
    },
    // {
    //     name:'Arrival Port',
    //     type: 'text',
    //     tab: 'operational',
    //     section: 'Voyage Itinerary',
    //     vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
    //     reportTypes: ['sea']
    // },
    {
        name:'ETD',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['anchor']
    },
    {
        name:'NOR Tendered',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'lng'],
        reportTypes: ['anchor']
    },
    {
        name:'Time for 1 hr Notice',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'lng'],
        reportTypes: ['anchor']
    },
    {
        name:'Main Engine Stand By',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'lng'],
        reportTypes: ['anchor']
    },
    {
        name:'Finish with Engines',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'lng'],
        reportTypes: ['anchor']
    },
    {
        name:'Anchored',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'lng'],
        reportTypes: ['anchor']
    },
    {
        name:'Anchor Heaved',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'lng'],
        reportTypes: ['anchor']
    },
    {
        name:'Total Time of Anchor',
        type: 'number',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stamp',
        vesselTypes: ['bulk', 'tanker', 'car', 'lng'],
        reportTypes: ['anchor']
    },
    {
        name:'Commenced Drifting',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stanp',
        vesselTypes: ['bulk', 'tanker', 'car', 'lng'],
        reportTypes: ['anchor']
    },
    {
        name:'Completed Drifting',
        type: 'date',
        tab: 'operational',
        section: 'Anchor/Drifting Time Stanp',
        vesselTypes: ['bulk', 'tanker', 'car', 'lng'],
        reportTypes: ['anchor']
    },
    {
        name:'Operation',
        type: 'text',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Departure Port Name',
        type: 'text',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['maneuvering']
    },
    {
        name:'ETD',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['tanker', 'container', 'lng'],
        reportTypes: ['maneuvering']
    },
    {
        name:'NOR Tendered',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Time for 1 hr Notice',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Pilot Onboard',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker','car', 'container', 'lng'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Last Line Onboard',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker','car', 'container', 'lng'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Pilot Disembarked',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker','car', 'container', 'lng'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Anchor Heaved',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker','car', 'container', 'lng'],
        reportTypes: ['maneuvering']
    },
    {
        name:'COSP',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker','car', 'container', 'lng', ],
        reportTypes: ['maneuvering']
    },
    {
        name:'Previously in ECA',
        type: 'boolean',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker','car', 'container', 'lng', 'cruise'],
        reportTypes: ['maneuvering']
    },
    {
        name:'All Fast',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker','car', 'container', 'lng'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Anchored',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker','car', 'container', 'lng'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Berthing Time',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Enter ECA',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Exit ECA',
        type: 'date',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Time in ECA',
        type: 'number',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['maneuvering']
    },
    {
        name:'In ECA',
        type: 'boolean',
        tab: 'operational',
        section: 'Arrival/Departure',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Report Type',
        type: 'text/dropdown',
        tab: 'operational',
        section: 'Type of Report',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
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
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Location',
        type: 'text/dropdown',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Tugs All Fast',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: ['port', 'maneuvering']
    },
    {
        name:'Tugs Last Line',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: ['port', 'maneuvering']
    },
    {
        name:'Draught Forward',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['sea', 'anchor', 'maneuvering']
    },
    {
        name:'Draught Aft',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['sea', 'anchor', 'maneuvering']
    },
    {
        name:'Trim',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['sea', 'anchor', 'maneuvering']
    },
    {
        name:'Ballast Water on Board',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['sea', 'anchor', 'maneuvering']
    },
    {
        name:'Fixed Ballast',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: ['sea', 'anchor', 'maneuvering']
    },
    {
        name:'Ballast Water Intake',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: ['anchor']
    },
    {
        name:'Ballast Water Discharged',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: [ 'anchor']
    },
    {
        name:'Ballast Water Sample Date',
        type: 'date',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: [ 'anchor']
    },
    {
        name:'Ballast Water Count of Cells',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: [ 'anchor']
    },
    //'All Fast' Operating Conditions 
    {
        name:'Draught Forward (All Fast)',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions/Draught',
        vesselTypes: ['bulk', 'tanker','car', 'container', 'lng', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Draught Aft (All Fast)',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions/Draught',
        vesselTypes: ['bulk', 'tanker','car', 'container', 'lng', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Trim (All Fast)',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions/Draught',
        vesselTypes: ['bulk', 'tanker','car', 'container', 'lng', 'cruise'],
        reportTypes: ['port']
    },
    {
        name:'Ballast Water on Board',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions/Draught',
        vesselTypes: ['bulk', 'tanker','car', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Ballast Water Intake',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions/Draught',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Ballast Water Discharged',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions/Draught',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Ballast Water Sample Date',
        type: 'date',
        tab: 'operational',
        section: 'Operating Conditions/Draught',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Ballast Water Count of Cells',
        type: 'number',
        tab: 'operational',
        section: 'Operating Conditions/Draught',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Awaiting Orders',
        type: 'checkbox',
        tab: 'operational',
        section: 'Next Port',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Next Port',
        type: 'text',
        tab: 'operational',
        section: 'Next Port',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Remaining Distance',
        type: 'number',
        tab: 'operational',
        section: 'Next Port',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Remaining Time',
        type: 'number',
        tab: 'operational',
        section: 'Next Port',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Next Timezone',
        type: 'text/dropdown',
        tab: 'operational',
        section: 'Next Port',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'ETA Pilot Station',
        type: 'date',
        tab: 'operational',
        section: 'Next Port',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['port']
    },
    {
        name:'Number of Units',
        type: 'date',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: ['tanker', 'car', 'lng'],
        reportTypes: ['sea', 'maneuvering']
    },
    {
        name:'Container Size',
        type: 'text/dropdown',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: ['tanker', 'car', 'lng'],
        reportTypes: ['sea', 'maneuvering']
    },
    {
        name:'Default Unit Weight',
        type: 'number',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: ['tanker', 'car', 'lng'],
        reportTypes: ['sea', 'maneuvering']
    },
    {
        name:'Cargo Weight',
        type: 'number',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: ['bulk', 'tanker', 'container', 'car', 'lng'],
        reportTypes: ['sea','anchor', 'maneuvering']
    },
    {
        name:'Inspection Date',
        type: 'date',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: ['bulk', 'tanker', 'lng'],
        reportTypes: ['maneuvering']
    },
    {
        name:'Inspection Company',
        type: 'text',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: ['bulk', 'tanker', 'lng'],
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
        vesselTypes: ['tanker', 'container', 'lng'],
        reportTypes: ['sea']
    },
    {
        name:'Type',
        type: 'text',
        tab: 'operational',
        section: 'Cargo Details',
        vesselTypes: [ 'tanker', 'lng'],
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
        name:'Displacement',
        type: 'number',
        tab: 'operational',
        section: 'Stability Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: ['sea', 'maneuvering']
    },
    {
        name:'GM Reserve',
        type: 'number',
        tab: 'operational',
        section: 'Stability Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: ['anchor', 'maneuvering']
    },
    {
        name:'Dead Weight Reserve',
        type: 'number',
        tab: 'operational',
        section: 'Stability Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: [ 'anchor', 'maneuvering']
    },
    {
        name:'Constant Weight',
        type: 'number',
        tab: 'operational',
        section: 'Stability Conditions',
        vesselTypes: ['bulk', 'tanker', 'container', 'lng'],
        reportTypes: ['sea', 'maneuvering']
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
        vesselTypes: ['lng'],
        reportTypes: ['sea', 'port', 'anchor', 'maneuvering']
    },
    {
        name:'Pressure (bar)',
        type: '',
        tab: 'operational',
        section: 'Tank',
        vesselTypes: ['lng'],
        reportTypes: ['sea', 'port', 'anchor', 'maneuvering']
    },
    {
        name:'Mean Temp (C)',
        type: '',
        tab: 'operational',
        section: 'Tank',
        vesselTypes: ['lng'],
        reportTypes: ['sea', 'port', 'anchor', 'maneuvering']
    },
    //position and weather
    {
        name:'Sea Temperature',
        type: 'number',
        tab: 'position-weather',
        section: 'Sea Water',
        vesselTypes: ['bulk', 'tanker', 'car', 'lng'],
        reportTypes: ['anchor']
    },
    {
        name:'Apparent Wind Speed',
        type: 'number',
        tab: 'position-weather',
        section: 'Wind',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['sea']
    },
    {
        name:'Sea Swell',
        type: 'number',
        tab: 'position-weather',
        section: 'Currents and Sea Water',
        vesselTypes: ['bulk', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['sea']
    },
]