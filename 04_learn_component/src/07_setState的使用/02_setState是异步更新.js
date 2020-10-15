import React, { Component } from 'react'
function Home(props) {
  return <h2>{props.message}</h2>
}
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      message: 'hello react'
    }
  }

  changeText() {
    // 第一种方式获取更改后的值
    this.setState({
      message: "你好啊，李银河"
    }, () => {
      console.log(this.state.message, "call back function");
    });
  }

  // 第二种方式
  componentDidUpdate() {
    console.log(this.state.message, 'component did update...');
  }

  render() {
    console.log("render ....");
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
        <button onClick={e => this.state.counter += 1}>+1</button>
        <Home message={this.state.message} />
      </div >
    )
  }
}
