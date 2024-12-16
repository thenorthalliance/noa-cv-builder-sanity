import {defineField, defineType} from 'sanity'
import { Tags } from './onepagertemplate/skill/Tags'

export default defineType({
  name: 'employee',
  title: 'Employee',
  type: 'document',
  fields: [
    // defineField({
    //   name: 'id',
    //   title: 'ID',
    //   type: 'string',
    //   description: 'Employee ID  format: "person-XXX" exhange XXX with a number.',
    // }),
    // defineField({
    //   name: 'firstname',
    //   title: 'Firstname',
    //   type: 'string',
    //   description: 'Please just write your Firstname. Do you have a middle name? Short it down by writing the first letter of the name with a period behind like this "C.".',
    // }),

    //Max characters: 23
    defineField({
      name: 'name',
      title: 'Name',
      description: 'Write the name of your employee.',
      type: 'string',
      validation: rule => rule.required().min(3).max(23).warning('Please shorten the name of your employee.'),
    }),
    //Max characters: 32
    defineField({
      name: 'jobTitle',
      title: 'Title',
      description: 'Write the job title of your employee.',
      type: 'string',
      validation: rule => rule.required().min(3).max(32).warning('Shorten your job title.'),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
   
    // Two fields for the same data. Been testing to see which one would work best.
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'tags',
      description: 'Add relevant skills. Max 10 skills in total.',
      options: {
        predefinedTags: Tags,
        allowCreate: true,
        onCreate: (value:string) => ({
          label: value,
          value: value.toLowerCase().replace(/\W/g, '-'),
        })
      },
      validation: rule => rule.required().max(10).error('You have too many skills. Max 10 skills.'),
    }),

    // Not visible in the form - Two fields for the same data. Been testing to see which one would work best.
    // defineField({
    //   name: 'skills1',
    //   title: 'Skills',
    //   type: 'array',
    //   hidden: true,
    //   of: [{type: 'skill'}],
    //   description: 'Add relevant skills. Max 10 skills in total.',
    //   // Dette hadde vært kult å få til!
    //   //https://www.sanity.io/docs/array-type#4fb380bc3722
    //   validation: rule => rule.required().max(10).error('You have too many skills. Max 10 skills.'),
    //   options: {
    //     // insertMenu: {
    //     //   groups: [
    //     //     {
    //     //       name: 'frontend',
    //     //       title: 'Frontend',
  
    //     //     },
    //     //     {
    //     //       name: 'backend',
    //     //       title: 'Backend',
    //     //     },
    //     //     {
    //     //       name: 'other',
    //     //       title: 'Other',
    //     //     },
    //     //   ],
    //     // },
    //   }
    // }),

    defineField({
      name: 'description',
      title: 'Description of the employee',
      description: 'Write a short description of the employee. Max 84 words, 517 characters.',
      type: 'text',
      rows: 8,
      validation: rule => rule.required().max(517).error('Please shorten the text.'),
    }),

    defineField({
      name: 'birthYear',
      title: 'Birth year',
      type: 'number',
      validation: rule => rule.required().integer().greaterThan(1941).lessThan(2020).warning('Please enter a valid birth year.'),
    }),

    defineField({
      name: 'residence',
      title: 'Residence',
      type: 'string',
      validation: rule => rule.required().max(24).error('Please shorten the name of your residence.'),
    }),

    defineField({
      name: 'experience',
      title: 'Experience',
      description: 'Add relevant work experience. Enter name of project, start date, end date and description of the project. Max 3 experiences in total.',
      type: 'array',
      of: [{type: 'experience'}],
      validation: rule => rule.required().max(3).error('You have too many qualifications. Max 3 qualifications.')
    }),

    defineField({
      name: 'qualifications',
      title: 'Qualifications',
      description: 'Add relevant educational qualifications, courses and certifications. Max 5 qualifications in total.',
      type: 'array',
      of: [{type: 'qualification'}],
      validation: rule => rule.required().max(5).error('You have too many qualifications. Max 5 qualifications.'),
    }),
    
  ],
  preview: {
    select: {
      Name: 'name',
      Image: 'image',
      JobTitle: 'jobTitle',
    },
    prepare(selection) {
      const {Name, Image, JobTitle} = selection
      return {
        title: Name,
        subtitle: JobTitle,
        media: Image,
      }
    },
  },
})
