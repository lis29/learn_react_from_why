import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      message: 'hello react'
    }
  }

  changeText() {
    this.setState({
      message: "你好啊，李银河",
      name: "coderwhy"
    });
  }

  componentDidUpdate() {
    console.log(this.state.name);
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <h3>{this.state.name}</h3>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div >
    )
  }
}
