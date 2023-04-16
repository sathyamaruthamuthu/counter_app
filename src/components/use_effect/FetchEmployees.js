import {useEffect, useState} from 'react'


const FetchEmployees = () => {
    const [employees, setEmployees] = useState([]);
       
   
    useEffect( () => {
        fetchEmpAPI()
        
    }, [])

    async function fetchEmpAPI() {
        let response = await fetch('./employees.json')
        response = await response.json()
        setEmployees(response)
    }
    if (!employees.length) return <div>Loading...</div>
    return(
        <div>
            Employee details 1
            
                { employees.length > 0 && employees.map((employee, index) => {
                     return (
                         <div className='mb-5'>
                            <div>{employee.jobTitleName}</div>
                            <div>{employee.firstName}</div>
                            <div>{employee.lastName}</div>
                            <div>{employee.preferredFullName}</div>
                            <div>{employee.phoneNumber}</div>
                            <div>{employee.emailAddress}</div>
                            <br/>
                        </div>
                       
                     )
                })}
               
            
        </div>
    )
}


export default FetchEmployees