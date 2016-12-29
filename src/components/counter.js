import React, {PropTypes} from 'react'

//ui组件
var Counter = ({counter, onIncreaseClick, onDecrementClick}) => {
  return (
    <p>
      Clicked: {counter} times
      {' '}
      <button onClick={onIncreaseClick}>
        +
      </button>
      <button onClick={onDecrementClick}>
        -
      </button>
    </p>
  )
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired
}

export default Counter