import { StructureBuilder } from "sanity/structure";


export const createAllEmployees = (
    S: StructureBuilder
) => {
    return S.listItem()
            .title('All Employees')
            .child(
                S.documentList()
                    .title('All Employees')
                    .filter('_type == "employee"')
            )
}
