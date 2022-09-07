import React from 'react';
import Person from './ProjectManagementSystem/Person';
import PercentPerson from './ProjectManagementSystem/PercentPerson'

function ProjectManagementSystem(){
    return (

        

        <div>
            <h2>Система управления проектами</h2> 

            <Person name="Евгений Харитонов" point="200" />
            <Person name="Евгения" point="100" />
            <Person name="@IvanJoy_Cy" point="100" />
            <Person name="@lewmilow" point="100" />
            <Person name="@neuromance" point="100" />
            <Person name="@Vl00l" point="100" />


            <br/>
            ИТОГО <span  className="red">700 </span>

            <br/>
            <h2>Процент каждого</h2>

            <PercentPerson name="Евгений Харитонов" percen="??" />
            <PercentPerson name="Евгения" percen="??" />
            <PercentPerson name="@IvanJoy_Cy" percen="??" />
            <PercentPerson name="@lewmilow" percen="??" />
            <PercentPerson name="@neuromance" percen="??" />
            <PercentPerson name="@Vl00l" percen="??" />
            
        </div> 

        

    );
}

export default ProjectManagementSystem;