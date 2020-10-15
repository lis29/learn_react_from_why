import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      valid: ""
    }
  }
  render() {
    const { username, password, valid } = this.state;
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户名：<input
              type="text"
              id="username"
              name="name"
              value={this.state.username}
              onChange={e => this.handleChange(e)} />
          </label>
          <br />
          <label htmlFor="password">
            密码：<input
              type="text"
              name="password"
              id="password"
              value={password}
              onChange={e => this.handleChange(e)} />
          </label>
          <br />
          <label htmlFor="valid">
            验证码：<input
              type="text"
              id="valid"
              name="valid"
              value={valid}
              onChange={e => this.handleChange(e)} />
          </label>
          <br />
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }

  handleChange(event) {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password, valid } = this.state;
    console.log(username, password, valid);
  }
}
