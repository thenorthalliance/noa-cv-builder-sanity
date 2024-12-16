import { defineField, defineType } from "sanity";
import { UpdateEmployees } from "../components/UpdateEmployees";



export default defineType({
    name: 'department',
    title: 'Department',
    type: 'document',
    fields: [
        defineField({
            name: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(), 
        }),
        defineField({
            name: 'OfficeIDFlowcase',
            title: 'Office(Department) ID Flowcase',
            hidden: true,
            type: 'string',
            readOnly: true,
        }),
        // defineField({
        //     name: 'company',
        //     title: 'Company',
        //     type: 'string',
        //     validation: (Rule) => Rule.required(), 
        // }),
        defineField({
            name: 'Employees',
            title: 'Employees',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'employee'}]}],

        }),
        defineField({
            name: 'UpdateEmployees',
            title: 'Update list of employees',
            type: 'string',
            components: {
                input: UpdateEmployees
            },
        }),
    ],
    preview: {
        select: {
            Department: 'Name',
            // Company: 'Company.Name',
        },
        prepare(selection) {
            const { Department } = selection
            return {
                title: Department,
                // subtitle: Company,
            }
        }
    },
});