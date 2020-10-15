import React, { PureComponent } from 'react'
import { EventEmitter } from "events"

const eventBus = new EventEmitter();

class Home extends PureComponent {
  componentDidMount() {
    eventBus.addListener("sayHello", this.handleSayHelloListener);
  }
  componentWillUnmount() {
    eventBus.removeListener("sayHello", this.handleSayHelloListener);
  }
  handleSayHelloListener(num, str) {
    console.log(arguments)
    console.log(num, str);
  }
  render() {
    return (
      <h2>Home</h2>
    )
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <button onClick={e => this.emmitEvent()}>点击了profile按钮</button>
      </div>
    )
  }

  emmitEvent() {
    eventBus.emit("sayHello", 123, "hello");
  }
}



export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <Home />
        <Profile />
      </div>
    )
  }
}
