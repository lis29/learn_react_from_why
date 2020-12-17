import React, { PureComponent } from 'react'
import { addNum, subNum } from '../store/actionCreator.js'
import connect from '../utils/connect'

class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About</h2>
        <h4>{this.props.counter}</h4>
        <button onClick={e => { this.props.increment(3) }}>+3</button>
        <button onClick={e => { this.props.decrement(5) }}>-5</button>
      </div>
    )
  }
}


const mapPropsToProps = (store) => {
  return {
    counter: store.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: function (num) {
      dispatch(addNum(num));
    },
    decrement: function (num) {
      dispatch(subNum(num));
    }
  }
}

export default connect(mapPropsToProps, mapDispatchToProps)(About);