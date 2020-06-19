import React, { Component } from 'react';
import "./popover.css";

class Popover extends Component {
    constructor() {
        super()
        this.state = { 
            showPopover: false
           }
      }

      changeView = () => {
        this.setState( (prevState) => ({showPopover : !prevState.showPopover}) )
    }

    render () {

        const contentDisplay = { display: this.state.showPopover ? 'block' : 'none'};
        const { title, children } = this.props;

        return (

       <div className="popover">
            <p onClick = {this.changeView} className="popover-btn"> 
                { title }
            </p>
            <div style={ contentDisplay } className="popover-content">
                { children }
            </div>
       </div>

    );
    }
}

export default Popover;
