import React, { useState } from 'react';

const CounterWithHooks = () => {
    const [count, updateCount] = useState(0);
    const counterStyles = {
            padding: '5px',
            borderRadius: '5px',
            outline: 'none',
            cursor: 'pointer'
        }
    
    return (
        <div>
            <h4>{ count }</h4>
            <button onClick={ () => updateCount(count + 1) }
            style={counterStyles}
            > Click to increment! </button>
        </div>
    );
}

export default CounterWithHooks;
 