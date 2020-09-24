import React, { Component } from 'react'

class ProfileHeader extends Component {
  render() {
    const { nickname, level } = this.props;
    return (
      <div style={{ border: "1px solid red" }}>
        <h3>用户名：{nickname}</h3>
        <h3>等级：{level}</h3>
      </div>
    )
  }
}
class Profile extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { nickname, level } = this.props;
    return (
      <div>
        <h2>Profile</h2>
        {/* <ProfileHeader nickname={nickname} level={level} /> */}
        <ProfileHeader {...this.props} />
        <ul>
          <li>设置1</li>
          <li>设置2</li>
          <li>设置3</li>
          <li>设置4</li>
        </ul>
      </div>
    )
  }
}


export default class App extends Component {
  render() {

    const user = {
      nickname: "kobe",
      level: 99
    }

    return (
      <div>
        {/* <Profile nickname="kobe" level={99} /> */}
        <Profile {...user} />
      </div>
    )
  }
}
