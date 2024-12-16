import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'experience',
    title: 'Experience',
    type: 'object',
    fields: [
        
        defineField({
            name: 'startDate',
            title: 'Start date',
            type: 'string',
            description: 'Format: MM.YY',
            validation: rule => rule.required().min(5).max(5),
        }),
        defineField({
            name: 'endDate',
            title: 'End date',
            type: 'string',
            description: 'Format: MM.YY',
            validation: rule => rule.required().min(5).max(5),
        }),
        defineField({
            name: 'projectName',
            title: 'Projct Name',
            description: 'Enter the name of the project. Max 55 characters.',
            type: 'string',
            validation: rule => rule.required().min(5).max(55),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            validation: rule => rule.required().max(911),
        }),   
    ],
    preview: {
        select: {
            Startdate: 'startDate',
            Enddate: 'endDate',
            Projectname: 'projectName',
        },
        prepare(selection) {
          const {Startdate, Enddate, Projectname} = selection
          return {
            title: Startdate + ' - ' + Enddate,
            subtitle: Projectname,
            media: null,
          }
        },
      },
});