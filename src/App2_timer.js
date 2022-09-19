import React, {Component} from "react";



export default class Add extends Component {

    state = {
        count: 0,
        isCounting: false
    };

    componentDidMount(){
        const userCount = localStorage.getItem('timer');
        if(userCount){
            this.setState({ count: +userCount })
        }
    }

    componentDidUpdate(){
        localStorage.setItem('timer', this.state.count)
    }

    componentWillUnmount(){
        clearInterval(this.couterId);
    }

    handleStart  = () =>  {
        this.setState({ isCounting: true });

        this.couterId = setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000 )
    }
    handleStop  = () =>  {
        this.setState({ isCounting: false });
        clearInterval(this.couterId);
    }
    handleReset  = () =>  {
        this.setState({ isCounting: false, count: 0 });
        clearInterval(this.couterId);
    }

    render() {
        return (
        
            <div className="App"style={ countStyle } >
                
                <h1>React Timer</h1>
                <h3>{this.state.count}</h3>
                {
                    !this.state.isCounting ? (
                        <button onClick={this.handleStart}>Start</button>
                    ) : (
                        <button onClick={this.handleStop}>Stop</button>
                    )
                }
                <button onClick={this.handleReset}>Reset</button>


            </div>
            
        );
    }

}

//export default Add;

const countStyle = {
    margin: '0 2rem',
    textAlign: 'center'
}