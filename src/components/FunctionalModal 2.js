import React from 'react';

const FunctionalModal = (props) => {
    const {isOpen, onClose, children} = props;

    const altModal = isOpen ? 
        (<div className='modal-box'>
        <button className='modal-close-btn' onClick={onClose}>X</button>
        <div>{children}</div>
        </div>) 
        : null;

        return altModal;    
};

export default FunctionalModal;