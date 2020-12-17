import React, { PureComponent } from 'react'



class Home extends PureComponent {
  UNSAFE_componentWillMount() {
    this.beginTime = Date.now();
  }

  componentDidMount() {
    this.endTime = Date.now();
    let interval = this.endTime - this.beginTime;

    console.log(`Home渲染时间:${interval}`);
  }

  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}
class About extends PureComponent {
  UNSAFE_componentWillMount() {
    this.beginTime = Date.now();
  }

  componentDidMount() {
    this.endTime = Date.now();
    let interval = this.endTime - this.beginTime;

    console.log(`About渲染时间:${interval}`);
  }

  render() {
    return (
      <div>
        About
      </div>
    )
  }
}


export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    )
  }
}
