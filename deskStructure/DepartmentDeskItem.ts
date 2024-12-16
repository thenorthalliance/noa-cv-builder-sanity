import { StructureBuilder } from "sanity/structure"


export const createAllDepartments = (
    S: StructureBuilder
) => {
    return S.listItem()
            .title('All Departments')
            .child(
                S.documentList()
                    .title('All Departments')
                    .filter('_type == "department"')
            )
}