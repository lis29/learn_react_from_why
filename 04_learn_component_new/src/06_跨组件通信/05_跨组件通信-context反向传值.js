import React, { Component } from 'react'

const myContext = React.createContext({
  nickname: 'aaaa',
  level: 0
});

class ProfileHeader extends Component {
  loginClicked = () => {
    console.log("************")
    this.context.loginAction("11111111");
  }
  render() {
    console.log(this.context);
    return (
      <div>
        <h3>用户名： {this.context.nickname}</h3>
        <h3>级别：{this.context.level}</h3>
        <button onClick={this.loginClicked}>登录</button>
      </div>
    )
  }
}

ProfileHeader.contextType = myContext;

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
      level: 9999,
      loginAction: (args) => {
        console.log("login action ** ", args);
      }
    };
    return (
      <div>
        <myContext.Provider value={user}>
          <Profile />
        </myContext.Provider>
      </div>
    )
  }
}
