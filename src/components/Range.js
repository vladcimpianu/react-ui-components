import React from 'react';
import './range.css';


class Range extends React.Component {
    constructor(props) {
      super(props);
      this.state = {rangeVal: 0}
      this.updateRange = this.updateRange.bind(this);
    }
  
    updateRange(event) {
      this.setState({
        rangeVal: event.target.value
      });
    } 
    
    render() {
      const { rangeVal } = this.state;
      return (
        <div>
          <input className="range" type="range"
            value={rangeVal}
            min="0"
            max="10"
            step="1"
            onChange={this.updateRange}
          />
          <span className="range-output">{rangeVal}</span>
        </div>
      )
    }
  }

  export default Range;