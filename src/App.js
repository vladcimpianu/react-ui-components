import React from 'react';
import Range from './components/Range';
import Modal from './components/Modal';
import FunctionalModal from './components/FunctionalModal';
import CounterWithHooks from './components/CounterWithHooks';
import Dropdown from './components/Dropdown';
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
        <Range />
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
        <Dropdown/>
      </div>
    )
  }  
}

export default App;
