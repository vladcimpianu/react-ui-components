import React from 'react';
import Range from './components/Range';
import Modal from './components/Modal';
import FunctionalModal from './components/FunctionalModal';
import CounterWithHooks from './components/CounterWithHooks';
import Dropdown from './components/Dropdown';
import Accordion from './components/Accordion';
import Happy from './components/Happy';
import Tabs from './components/Tabs';
import Popover from './components/Popover';
import './components/modal.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
  
  render() {
    return (
      <div className='App'>
        <Dropdown/>
        <Range />
        <Happy />
        <button 
          className='modal-btn' 
          onClick={ (e) => this.setState({ isOpen: true })}>
        Open Modal
        </button>
        <Modal 
          isOpen={this.state.isOpen} 
          onClose={ (e) => this.setState({ isOpen: false })}
        >Lorem ipsum id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque
        </Modal> 
        <FunctionalModal isOpen={this.state.isOpen} onClose={ (e) => this.setState({ isOpen: false })}>Lorem ipsum functional</ FunctionalModal>
        <CounterWithHooks />
        <Accordion title="Header">
              <div> 
                <h2>First Header</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>          
              </div>              
              <div> 
                <h2>Second Header</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>          
              </div>
        </ Accordion>
        <Tabs />
        <Popover title="Open Popup">
            <h2>Popover Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra
            magna ac.</p>
        </Popover>
      </div>
    )
  }  
}

export default App;
