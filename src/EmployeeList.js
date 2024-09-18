import React, { useEffect, useState } from "react";


const EmployeeList = () =>  {
    const [employees, setEmployees] = useState([]);
    

    useEffect(() => {
        const fetchEmployees = async () =>{
            try {
                const response = await fetch("http://localhost:8080/api/employees");
                const data = await response.json();
                
                setEmployees(data);
            } catch (error) {
                console.error("Error fetching employees", error.message);
            }
        }
        fetchEmployees();
    }, []); 
        

    return (
        <section id="employees">
            <h1>Employees From Spring Boot API</h1>
            <ul>
                {employees.map(employee =>(
                    <li key={employee.id}>
                        <h3>{employee.firstName}</h3>
                        <h3>{employee.lastName}</h3>
                        <h3>{employee.phoneNumber}</h3>
                        <h3>{employee.hireDate}</h3>
                        <h3>{employee.jobTitle}</h3>
                        <h3>{employee.salary}</h3>
                        </li>
                ))}
            </ul>
        </section>
    );

};
export default EmployeeList;