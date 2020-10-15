import React, { Component } from 'react'



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "Hello React"
    }
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    console.log("App render函数被调用");
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <h2>{this.state.message}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.counter !== this.state.counter) {
      return true;
    }

    if (nextState.message != this.state.message) {
      return true;
    }

    return false;
  }

  increment() {
    this.setState((prestate) => {
      return {
        counter: prestate.counter + 1
      }
    })
  }

  changeText() {
    this.setState({
      message: "你好啊，李老板"
    })
  }
}
