import React, { Component } from 'react'

const UserContext = React.createContext({
  nickname: 'aaaa',
  level: 0
});

function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {
        val => {
          return (
            <div>
              <h3>用户名： {val.nickname}</h3>
              <h3>级别：{val.level}</h3>
            </div>
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
          <Profile />
        </UserContext.Provider>
      </div>
    )
  }
}
