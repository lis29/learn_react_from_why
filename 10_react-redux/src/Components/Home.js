import React, { PureComponent } from 'react'
import store from '../store/index.js'
import { addNum } from '../store/actionCreator.js'

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }


  render() {
    return (
      <div>
        <h2>Home</h2>
        <h4>{this.state.counter}</h4>
        <button onClick={e => { this.increment() }}>+1</button>
      </div>
    )
  }

  increment() {
    store.dispatch(addNum(1));
  }
}
