import React, { Component } from 'react';
import './accordion.css';

class Accordion extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }

        this.togglePanel = this.togglePanel.bind(this);
        }
        
        togglePanel(e){
        this.setState({open: !this.state.open})
        }
        
    render() {
        return (
            <div className='accordion'>
                <div onClick={(e)=>this.togglePanel(e)} className="header">
                    {this.props.title}
                </div>

                {this.state.open ? (<div className="content">{this.props.children}</div>) : null}
            </div>
        );
    }
}

export default Accordion;

