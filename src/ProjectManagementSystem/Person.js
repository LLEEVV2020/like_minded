import React from 'react';

const Person = (props) => {

    

    return (
        <div>
            <p>
            {props.name} - 0 уровень 
            <span className="red">{props.point} </span> баллов  
            <input type="text" value="100"></input> 
            <button type='button'>add</button>  
            </p>
        </div>
    );
};

export default Person;