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
        vesselTypes: ['bulker', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes:  ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name:'Voyage Number',
        type: 'number',
        tab: 'operational',
        section: 'Vessel Details',
        vesselTypes: ['bulker', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name:'CP Speed',
        type: 'number',
        tab: 'operational',
        section: 'Vessel Details',
        vesselTypes: ['bulker', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['sea', 'maneuvering']
    },
    {
        name:'CP Fuel',
        type: 'number',
        tab: 'operational',
        section: 'Vessel Details',
        vesselTypes: ['bulker', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['sea']
    },
    {
        name:'Report From',
        type: 'date',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulker', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['anchor', 'port', 'sea', 'maneuvering']
    },
    {
        name:'EOSP',
        type: 'date',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulker', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['sea']
    },
    {
        name:'Report To',
        type: 'date',
        tab: 'operational',
        section: 'Report Time',
        vesselTypes: ['bulker', 'tanker', 'car', 'container', 'lng', 'cruise'],
        reportTypes: ['anchor', 'port', 'sea', 'maneuvering']
    },
    //position and weather
    {
        name:'Sea Temperature',
        type: 'number',
        tab: 'position-weather',
        section: 'Sea Water',
        vesselTypes: ['bulker', 'tanker', 'car', 'lng'],
        reportTypes: ['anchor']
    },
    {
        name:'Apparent Wind Speed',
        type: 'number',
        tab: 'position-weather',
        section: 'Wind',
        vesselTypes: ['bulker', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['sea']
    },
    {
        name:'Sea Swell',
        type: 'number',
        tab: 'position-weather',
        section: 'Currents and Sea Water',
        vesselTypes: ['bulker', 'tanker', 'car', 'container', 'lng'],
        reportTypes: ['sea']
    },
]