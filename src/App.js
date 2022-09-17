import React, {Component} from "react";

/**
 * constructor(props){
        super(props);

        this.state = {
            count: 0
        };
    }
 */

class Add extends Component {

    

    /*============================================*/ 
    /*Это ноый подход, через стрелочную функцию,
    почему то реакт считает его не надо, хотя все разработчики
    его используют*/
    /*state = {
        count: 0
    };

    handleClick = () => {
        
        this.setState({
            count: this.state.count + 1
        })
        
        // редкий вариант
        //this.setState(
        //    (prevState) => ({count: prevState.count + 1}),
        //    // колбек для того чтоб было вызвано после первого параметра
        //    () => {
        //        console.log("ну вот.")
        //    }
        //)
    }*/

    // Старая версия
    /*constructor(){
        super();

        this.state = {
            count: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }*/

    /*increment () {
        
        this.setState({
            count: this.state.count + 1
        })
        
        // редкий вариант
        //this.setState(
        //    (prevState) => ({count: prevState.count + 1}),
            // колбек для того чтоб было вызвано после первого параметра
        //    () => {
        //        console.log("ну вот.")
        //    }
        //)
    }*/


    state = {
        count: 0
    };

    increment  = () =>  {
        
        this.setState({
            count: this.state.count + 1
        })
        
        // редкий вариант
        /*this.setState(
            (prevState) => ({count: prevState.count + 1}),
            // колбек для того чтоб было вызвано после первого параметра
            () => {
                console.log("ну вот.")
            }
        )*/
    }

    decrement  = () =>  {
        
        this.setState({
            count: this.state.count - 1
        })
        
    }

    render() {
        return (
        
            <div className="App">
                
                <button onClick={this.increment} >Прибавить</button>
                <span style={
                    {
                        margin: '0 2rem',
                        display: 'inline-block'
                    }
                }>{this.state.count}</span>
                <button onClick={this.decrement} >Отнять</button>

                {/*<button onClick={() => this.setState({count: this.state.count + 1})} >{this.state.count}</button>*/}

            </div>
            
        );
    }

}

export default Add;