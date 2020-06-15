import React from 'react';
import Range from './components/Range';
import './components/range.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeVal: 0
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
      <div>
        <Range range={rangeVal} updateRange={this.updateRange}/>
      </div>
    )
  }  
}

export default App;
