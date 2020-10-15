import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello World!',
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={e => this.changeText(e)}>改变文本</button>

        <button id="btn">改变文本2</button>
        <button onClick={e => this.changeText3(e)}>累加+1</button>
      </div>
    )
  }

  componentDidMount() {
    document.getElementById("btn").addEventListener("click", (e) => {
      this.setState({
        message: "你好啊，李银河 sync"
      });
      console.log("原生事件中修改state的值，", this.state.message);
    })
  }

  changeText(e) {
    setTimeout(() => {
      this.setState({
        message: "你好啊，李银河 async"
      });
      console.log("同步更新state的值，setTimeout ", this.state.message);
    }, 1000);
  }

  changeText3(e) {
    window.setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
      console.log("同步更新state的值，setInterval ", this.state.counter);
    }, 1000);
  }
}
