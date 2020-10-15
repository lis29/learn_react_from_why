import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: ''
    }
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="">
            用户名：<input type="text" value={this.state.myText} onChange={e => this.textChange(e)} />
            <br />
            <input type="submit" value="提交" onClick={e => this.submit(e)} />
          </label>
        </form>
      </div>
    )
  }

  textChange(e) {
    this.setState({
      myText: e.target.value
    });
  }
  submit(e) {
    e.preventDefault();
    console.log(this.state.myText);
  }
}
