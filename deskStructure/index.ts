import type { StructureResolver } from "sanity/structure";
import {PresentationIcon} from '@sanity/icons'
import { createAllEmployees } from "./EmployeeDeskItem";
import { createAllDepartments } from "./DepartmentDeskItem";


export const deskStructure: StructureResolver = (S) => 
    S.list()
        .title('NoA CV Builder')
        .items([
            // S.listItem()
            //     .title('Templates')
            //     .schemaType('template')
            //     .icon(PresentationIcon)
            //     .child(
            //         S.documentList()
            //             .schemaType('OnePager')
            //             .title('OnePager')
            //     )
            // ,
            S.listItem()
                .title('Organization')
                .child(
                    S.list()
                        .title('Organization')
                        .items([
                            createAllEmployees(S),
                            S.divider(),
                            createAllDepartments(S),
                        ])
                )
        ]);