import React, { PureComponent } from 'react'


class Home extends PureComponent {
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        About
      </div>
    )
  }
}

const TimeCom = (WrappedComponent) => {
  class NewCom extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now();
    }

    componentDidMount() {
      this.endTime = Date.now();
      const interval = this.endTime - this.beginTime;
      console.log(`${WrappedComponent.name}加载时间：${interval}`)
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }

  return NewCom
}

const NewHome = TimeCom(Home);
const NewAbout = TimeCom(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <NewHome />
        <NewAbout />
      </div>
    )
  }
}
