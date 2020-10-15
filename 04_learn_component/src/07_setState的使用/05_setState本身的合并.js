import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  increment = () => {
    // this.setState({
    //   counter: this.state.counter + 1
    // });
    // this.setState({
    //   counter: this.state.counter + 1
    // });
    // this.setState({
    //   counter: this.state.counter + 1
    // });
    // this.setState({
    //   counter: this.state.counter + 1
    // });

    // 2.setState合并时进行累加
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    });
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    });
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    });
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    });
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
