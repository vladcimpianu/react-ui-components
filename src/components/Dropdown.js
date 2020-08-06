import React, { Component } from 'react';
import './dropdown.css';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {displayDropdown: false};
    };


    handleDropdown = (e) => this.setState( (prevState) =>  ( { displayDropdown: !prevState.displayDropdown } ) );

    render() {
        const showHide = this.state.displayDropdown ? 'block' : 'none';
        const showHideStyle = { display: showHide };
        return (
        <div class="dropdown">
            <button className="dropdown-btn" onClick={ this.handleDropdown }>Menu</button>
            <ul className="dropdown-list" style={ showHideStyle }>
                <li>About</li>
                <li>Our Work</li>
                <li>Projects</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ul>
        </div>
        )
    }
};

export default Dropdown;
