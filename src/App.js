import React, {Component} from "react";

class Add extends Component {

    // Старая версия
    /*constructor(props){
        super(props);

        this.state = {
            count: 0
        };
    }*/

    state = {
        count: 0
    };

    handleClick = () => {
        // первы вариант
        /*this.setState({
            count: this.state.count + 1
        })*/
        
        this.setState(
            (prevState) => ({count: prevState.count + 1})
        )


    }

    render() {
        return (
        
            <div className="App">
                Класы реакта
                <button onClick={this.handleClick} >{this.state.count}</button>
            </div>
            
        );
    }

}

export default Add;