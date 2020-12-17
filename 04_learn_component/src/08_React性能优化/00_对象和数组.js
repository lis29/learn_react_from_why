import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: "James", age: 33, height: 1.88 },
      hobbies: ["篮球", "足球"]
    }

    this.arr = ['aaa', 'bbb', 'ccc']
  }


  render() {
    const { user, hobbies } = this.state;
    return (
      <div>
        <h2>用户信息：</h2>
        <h4>姓名：{user.name}</h4>
        <h4>年龄：{user.age}</h4>
        <h4>身高：{user.height}</h4>
        <br />
        <h2>爱好：</h2>
        <ul>
          {
            hobbies.map((item, index) => {
              return (
                <li key={item + "" + index}>
                  {item}
                </li>
              )
            })
          }
        </ul>

        <button onClick={e => this.addHobby(e)}>添加爱好</button>
        <button onClick={e => this.updateUser(e)}>修改用户信息</button>
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps);
    console.log(nextState);
    if (nextState.user === this.state.user) {
      console.log("===============");
      return false;
    }
    return true;
  }

  addHobby(e) {
    // this.state.hobbies.push('旅游');
    // this.setState({
    //   hobbies: this.state.hobbies
    // })
  }



  updateUser(e) {
    this.state.user.name = "Kobe";
    this.setState({
      user: this.state.user
    });

    // const newArr = this.arr;
    // newArr.push('dddd');
    // const arr2 = [...this.arr];
    // if (arr2 === this.arr) {
    //   console.log("=========")
    // } else {
    //   console.log("不严格相同")
    // }
  }
}
