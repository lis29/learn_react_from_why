import React, { Component, createRef } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: ''
    }

    this.usernameRef = createRef();
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="username">
            用户名：<input
              id="username"
              ref={this.usernameRef}
              type="text" />
          </label>
          <br />
          <input type="submit" value="提交" onClick={e => this.submit(e)} />
        </form>
      </div>
    )
  }

  submit(e) {
    e.preventDefault();
    console.log(this.usernameRef);
    console.log(this.usernameRef.current);
    console.log(this.usernameRef.current.value);
  }
}