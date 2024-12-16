import { defineField, defineType } from "sanity";


export default defineType({
    name: 'skill',
    title: 'Skill',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
            description: 'Write the label of the skill.',
            validation: rule => rule.required().min(1).max(23).warning('Please shorten the label of the skill.'),
        }),
        defineField({
            name: 'value',
            title: 'Value',
            type: 'string',
            description: 'Write the value of the skill. No big letters, and hyphen(-) where there is space.',
            validation: rule => rule.required().min(1).max(23).warning('Please shorten the value of the skill.'),
        }),
    ],
});
