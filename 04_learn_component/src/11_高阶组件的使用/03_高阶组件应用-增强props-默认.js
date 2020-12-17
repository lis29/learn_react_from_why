import React, { createContext, PureComponent } from 'react'

const UserContext = createContext({
  nickname: "kobe",
  level: 99,
  region: 'American'
})

class Home extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {
          user => {
            return <h2>Home  {`昵称: ${user.nickname} 等级: ${user.level} 区域: ${user.region}`}</h2>
          }
        }
      </UserContext.Consumer>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {
          user => {
            return <h2>About {`昵称: ${user.nickname} 等级: ${user.level} 区域: ${user.region}`}</h2>
          }
        }
      </UserContext.Consumer >
    )
  }
}


export default class App extends PureComponent {
  render() {
    return (
      <div>
        app
        <UserContext.Provider value={{ nickname: 'Lebron', level: 88, region: "China" }}>
          <Home />
          <About />
        </UserContext.Provider>
      </div>
    )
  }
}
