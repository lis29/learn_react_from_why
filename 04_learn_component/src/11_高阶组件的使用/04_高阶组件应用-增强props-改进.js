import React, { createContext, PureComponent } from 'react'


const UserContext = createContext({
  nickname: 'Lebron',
  level: 99,
  region: 'American'
})

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>{`昵称：${this.props.nickname} 级别：${this.props.level} 区域：${this.props.region}`}</p>
      </div>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>{`昵称：${this.props.nickname} 级别：${this.props.level} 区域：${this.props.region}`}</p>
      </div>
    )
  }
}

const withUser = (WrappedComponent) => {
  const NewComponent = (props) => {
    return (
      <UserContext.Consumer>
        {
          user => {
            return <WrappedComponent {...user} {...props} />
          }
        }
      </UserContext.Consumer>
    )
  }
  return NewComponent;
}

const NewHome = withUser(Home);
const NewAbout = withUser(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{ nickname: 'Lebron', level: 88, region: '中国' }}>
          <NewHome />
          <NewAbout />
        </UserContext.Provider>
      </div>
    )
  }
}
