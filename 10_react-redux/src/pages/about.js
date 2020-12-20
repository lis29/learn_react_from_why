import React, { PureComponent } from 'react'
import store from '../store'
import { increment, decrement } from '../store/actionCreateor'

export default class About extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    this.subscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  componentWillUnmount() {
    this.subscribe();
  }

  render() {
    return (
      <div>
        <h2>About</h2>
        <h3>{this.state.counter}</h3>
        <button onClick={e => this.increment(1)}>+1</button>
        <button onClick={e => this.increment(3)}>+3</button>
        <button onClick={e => this.decrement(5)}>-5</button>
      </div>
    )
  }


  increment(num) {
    store.dispatch(increment(num))
  }

  decrement(num) {
    store.dispatch(decrement(num))
  }
}
