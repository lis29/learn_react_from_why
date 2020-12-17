import React, { Component, PureComponent } from 'react'

class Home extends Component {
  render() {
    return <h2>Home: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
  }
}
class About extends Component {
  render() {
    return <h2>About: {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
  }
}

function enhanceRegionProps(WrappedComponent) {
  function NewComponent(props) {
    return <WrappedComponent {...props} region="中国" />
  }
  NewComponent.displayName = "增强组件"
  return NewComponent;
}

const NewAbout = enhanceRegionProps(About);
const NewHome = enhanceRegionProps(Home);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <NewHome nickname="kobe" level={99} region="aaa" />
        <NewAbout nickname="Lebron" level={95} />
      </div>
    )
  }
}
