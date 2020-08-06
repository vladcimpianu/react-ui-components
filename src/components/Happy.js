import React, { Component } from 'react';

class Happy extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentEnthusiasm : 1,
            value: ''
        }
    };

    updateEnthusiasm = (currentEnthusiasm) => this.setState({currentEnthusiasm});
    onPlus = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    onMinus = () => this.updateEnthusiasm(Math.max(this.state.currentEnthusiasm - 1, 0));
    handleInput = (e) => this.setState({value: e.target.value});
    exclamationMarks = (n) => Array(n+1).join('!');
    

    render() {
        return (
            <div style={{border: '1px solid black', margin: '5px'}}>
                <h4 className="greeting" style={{padding: '5px', margin: '5px'}}>
                    Hello {this.state.value + this.exclamationMarks(this.state.currentEnthusiasm)}
                </h4>
                <input placeholder="Your name" value={this.state.value} onChange={this.handleInput} style={{padding: '5px', margin: '5px'}}></input>
                <div>
                    <p> Level of enthusiasm </p> 
                    <button style={{padding: '10px'}} onClick={this.onPlus}> + </button>
                    <button style={{padding: '10px'}} onClick={this.onMinus}> - </button>  
                </div>

            </div>
        );
    }
}

export default Happy;

