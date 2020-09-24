import React, { Component } from 'react'

const myContext = React.createContext({
  nickname: 'aaaa',
  level: 0
});

class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <h3>用户名： {this.context.nickname}</h3>
        <h3>级别：{this.context.level}</h3>
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



class Avatar extends Component {
  constructor(props) {
    super(props);
  }
  updateAvatar = () => {
    // 选择图片

    // post图片

    // 成功之后获取对应的url
    const url = "新的url";
    this.props.changeAvatar(url);
  }
  render() {
    const { avatarUrl, name } = this.props;
    return (
      <img className="Avatar"
        src={avatarUrl}
        alt={name}
        onClick={e => this.updateAvatar()}
      />
    )
  }
}

class UserInfo extends Component {

  render() {
    const user = { name: 'kobe', age: 40 };
    const avatarInfo = {
      avatarUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600940289325&di=55075e8388eb0072621f930b87f4d12e&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fwh%3D450%2C600%2Fsign%3D3b480bceb07eca80125031e3a413bbeb%2F4d086e061d950a7b8b51e3290ad162d9f3d3c9f3.jpg',
      alt: "kobe",
      avatarOnClick: (newUrl) => {
        console.log(newUrl);
      }
    };
    return (
      <div>
        <h3>用户名：{user.name}</h3>
        <h3>年龄：{user.age}</h3>
        <Avatar
          avatarUrl={avatarInfo.avatarUrl}
          alt={avatarInfo.alt}
          changeAvatar={avatarInfo.avatarOnClick} />
      </div>
    )
  }
}

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, age } = this.props;
    return (
      <div>
        <h3>name: {name}</h3>
        <h3>age: {age}</h3>
      </div>
    )
  }
}






export default class App extends Component {
  render() {
    const user = {
      nickname: 'kobe',
      level: 9999
    };
    return (
      <div>
        <myContext.Provider value={user}>
          <Profile />
        </myContext.Provider>
        <hr />
        <UserInfo />
      </div>
    )
  }
}
