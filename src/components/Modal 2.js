import React, { Component } from 'react'


class Modal extends Component{
    render(){
        let modal;
        if (!this.props.isOpen){
            modal = null;
        } else {
            modal = (
            <div className='modal-box'>
                <button className='modal-close-btn' onClick={this.props.onClose}>X</button>
                <div>{this.props.children}</div>
            </div>
            )
        }
        return(
        <div>{modal}</div>
        )
    }
};

export default Modal;

