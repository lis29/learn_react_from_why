import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  increment = () => {
    // this.state.counter += 1;
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    return (
      <div>
        <h2>计数器：{this.state.counter}</h2>
        <button onClick={this.increment}>+1</button>
      </div>
    )
  }
}
