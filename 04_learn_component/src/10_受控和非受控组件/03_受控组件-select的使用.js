import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friute: 'banana'
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="friute">
            <select name="friute" id="friute" value={this.state.friute} onChange={e => this.textChange(e)}>
              <option value="orange">橘子</option>
              <option value="banana">香蕉</option>
              <option value="apple">苹果</option>
              <option value="lemon">柠檬</option>
            </select>
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }

  textChange(e) {
    this.setState({
      friute: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.friute)
  }
}
