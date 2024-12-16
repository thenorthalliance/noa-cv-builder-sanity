
import { Button } from '@sanity/ui'



export const UpdateEmployees = () => {
    // const company = 'noaignite';
    // const office_id = '56d7f5fd69702d248e000007';
    // const url = `https://${company}.flowcase.com/api/v2/users/search?deactivated=false&office_ids[]=${office_id}`;
    
    async function updateEmployee() {
        // const url = `https://noaignite.flowcase.com/api/v2/users/search?deactivated=false&office_ids[]=56d7f5fd69702d248e000007`;
        const url = `https://noaignite.flowcase.com/api/v2/users/search`;
        const employees: any[] = [];
        const flowcaseApiToken = "57644d168d745199db06e220c91ccd8b";
        console.log('flowcaseApiToken', flowcaseApiToken);

        try {
            // Perform the fetch request
            const response = await fetch(url, {
                method: 'GET',  // You might want to specify the method (GET)
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${flowcaseApiToken}`,
                },
            });

            // Await the response body and log it
            const data = await response.json();
            console.log('Response data:', data);

            // Handle unsuccessful responses (non-2xx status)
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }


        // const data = await response.json();
        // data.data.forEach((employee) => {
        //     employees.push({
        //         _id: employee.id,
        //         _type: 'employee',
        //         name: employee.name,
        //         email: employee.email,
        //         telephone: employee.phone,
        //         default_cv_id: employee.default_cv_id,
        //         title: employee.title.int,
        //         office_id: employee.office_id,
        //         office_name: employee.office_name,
        //         company : employee.company_subdomains
        //     });
        // });

        // console.log(employees);
        // return employees;
        
    }

    return (
        <div className="">
            <Button
            tone='primary'
            radius={2}
            text="Update"
            onClick={() => {
                updateEmployee();
            }}
            />
        </div>
    )
}