const fields = [
  'Report From',
  'Report To', 
  'Report Period', 
  'Time Sailed',
  'Instructed Speed', 
  'Operating Code',
  'Finish Load',
  'Sea Swell',
  'Next Port',
  'Cargo Weight'
]

interface Template {
  add: string[],
  remove: string[]
}

const SeaReport: Template = {
  add: ['Report From', 'Report To', 'Report Period', 'Time Sailed',  'Sea Swell'],
  remove: ['Operating Code', 'Finish Load','Instructed Speed',]
}


const cruiseTemplate: Template = {
  add: ['Report From', 'Report To','Report To', 'Report Period', 'Time Sailed', 'Instructed Speed',],
  remove: ['Next Port', 'Cargo Weight',  'Sea Swell']
}


export const filterBySea = fields.filter(f => SeaReport.add.includes(f));
export const filterByTemplate = filterBySea.filter(f => cruiseTemplate.add.includes(f))
