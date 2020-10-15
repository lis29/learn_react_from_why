import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        { name: "lilei", age: 20 },
        { name: "lily", age: 25 },
        { name: "lucy", age: 22 }
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>好友列表:</h2>
        <ul>
          {
            this.state.friends.map((item, index) => {
              return (
                <li key={item.name + "" + index}>
                  姓名：{item.name}
                  年龄：{item.age}
                  <button onClick={e => this.incrementAge(index)}>age + 1</button>
                </li>
              )
            })
          }
        </ul>

        <button onClick={e => this.addFriends()}>添加好友</button>
      </div>
    )
  }

  incrementAge(index) {
    // console.log(index);
    // this.state.friends[index].age += 1;
    // console.log(this.state.friends)
    // this.setState((preState) => {
    //   preState[index].age += 1;
    //   return {
    //     friends: preState.friends
    //   }
    // })

    // let newFriends = this.state.friends;
    // newFriends[index].age += 1;

    // this.state.friends[index].age += 1;

    let newFriends = [...this.state.friends];
    newFriends[index].age += 1;
    this.setState({
      friends: this.state.friends
    });
  }
  addFriends() {
    const f = { name: 'tom', age: 33 };

    this.state.friends.push(f);
    this.setState({
      friends: this.state.friends
    })
    
    // this.state.friends.push(f);
    // this.setState((preState, preProps) => {
    //   return {
    //     friends: preState.friends
    //   }
    // });

    // const newFriends = this.state.friends;
    // newFriends.push(f);
    // this.setState({
    //   friends: newFriends
    // })

    // const newFriends = [...this.state.friends];
    // newFriends.push(f);
    // this.setState({
    //   friends: newFriends
    // });

  }
}
