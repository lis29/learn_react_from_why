import React, { createRef, PureComponent, forwardRef } from 'react'

class Home extends PureComponent {
  render() {
    return (
      <div>
        Home组件
      </div>
    )
  }
}

// const Profile = forwardRef(function (props, ref) {
//   return <p ref={ref}>Profile</p>
// })

const Profile = forwardRef(function Profile(props, ref) {
  console.log(props)
  return (
    <div>
      <h3 ref={ref}>档案</h3>
      <p>Profile</p>
    </div>
  )
});

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.titleRef = createRef();
    this.homeRef = createRef();
    this.profileRef = createRef();
  }
  render() {
    return (
      <div>
        <h1 ref={this.titleRef}>标题</h1>
        <Home ref={this.homeRef}></Home>
        <Profile ref={this.profileRef} name='ahhah'></Profile>
        <button onClick={e => this.btnClicked(e)}>按钮</button>
      </div>
    )
  }
  btnClicked(e) {
    console.log(this.titleRef.current);
    console.log(this.homeRef.current);
    console.log(this.profileRef.current);
  }
}
