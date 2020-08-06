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
        this.setState(prevState => ({ open: !prevState.open }))
        }
        
    render() {
        const title = this.props.title;
        const children = this.props.children;
        const open = this.state.open
        return (
            <div className='accordion'>
                <div onClick={(e)=>this.togglePanel(e)} className="header">
                    { title }
                </div>

                {open ? (<div className="content"> { children } </div>) : null}
            </div>
        );
    }
}

export default Accordion;

