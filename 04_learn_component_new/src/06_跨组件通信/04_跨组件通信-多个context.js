import React, { Component } from 'react'

const UserContext = React.createContext({
  nickname: 'aaaa',
  level: 0
});
const ThemeContext = React.createContext({
  color: 'red'
})

function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {
        val => {
          return (
            <ThemeContext.Consumer>
              {
                theme => {
                  return (
                    <div>
                      <h3 style={{ color: theme.color }}>用户：{val.nickname}</h3>
                      <h3>级别：{val.level}</h3>
                    </div>
                  )
                }
              }
            </ThemeContext.Consumer>
          )
        }
      }
    </UserContext.Consumer>
  )
}

function Profile() {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
        <li>设置5</li>
      </ul>
    </div>
  )
}

export default class App extends Component {
  render() {
    const user = {
      nickname: 'kobe',
      level: 9999
    };
    return (
      <div>
        <UserContext.Provider value={user}>
          <ThemeContext.Provider value={{ 'color': 'red' }}>
            <Profile />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}
