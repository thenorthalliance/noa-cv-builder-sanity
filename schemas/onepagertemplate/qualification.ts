import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'qualification',
    title: 'Qualification',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            title: 'Label',
            description: 'Select the type of qualification',
            type: 'string',
            initialValue: 'Utdanning',
            options: {
              list: [
                {title: 'Utdanning', value: 'Utdanning'},
                {title: 'Sertifisering', value: 'Sertifisering'},
                {title: 'Kurs', value: 'Kurs'},
              ]
            },
        }),
        defineField({
            name: 'detail',
            title: 'Detail',
            description: 'Enter name of qualification, and preferably add the year of finished qualification. Max characters: 50.',
            type: 'string',
            validation: rule => rule.required().max(50).error('Please shorten the detail of qualification.'),
        }),
    ],
    preview: {
        select: {
            Qualification: 'label',
            Detail: 'detail',
        },
        prepare(selection) {
          const {Qualification, Detail} = selection
          return {
            title: Qualification,
            subtitle: Detail,
            media: null,
          }
        },
      },
});