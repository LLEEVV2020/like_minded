const PercentPerson = (props) => {

    return (
        
        <p>
            {props.name} - 0 уровень 
            - <span  className="red">{props.percen}</span>%  
        </p>
        
    );
};

export default PercentPerson;