import React from 'react';
import Range from './components/Range';
import Modal from './components/Modal';
import './components/range.css';
import './components/modal.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeVal: 0,
      isOpen: false
    }
    this.updateRange = this.updateRange.bind(this);
  }
  
  updateRange(val) {
    this.setState({
      rangeVal: val
    })
  } 
  
  render() {
    const { rangeVal } = this.state;
    return (
      <div className='App'>
        <Range range={rangeVal} updateRange={this.updateRange}/>
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
      </div>
    )
  }  
}

export default App;
