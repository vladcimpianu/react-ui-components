import React, { Component } from 'react';
import './dropdown.css';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {display: 'Home'};
        this.handleOption = this.handleOption.bind(this);
    };

    handleOption = (e) => {
        e.preventDefault();
        // this.state.display = e.target.display;
        this.setState(this.state.display = e.target.display);
        alert(`You've selected ${e.target.value}`);
    };

    render() {
        return (
            <div className='dropdown'>
                <select display={this.state.display} onChange={this.handleOption}>
                    <option display="Home">Home</option>
                    <option display="About">About</option>
                    <option display="Contact">Contact</option>
                    <option display="FAQ">FAQ</option>
                </select>
            </div>
        )
    }
};

export default Dropdown;
