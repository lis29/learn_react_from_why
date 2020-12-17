import React, { PureComponent } from 'react'


// const divStyle = { color: 'blue', height: 50, backgroundColor: 'green' }
// function HelloWorldComponent(props) {
//   return <div style={divStyle}>Hello World!</div>
// }

function HelloWorldComponent(props) {
  return <div {...props}>Hello World</div>
}


export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      height: 30
    }
  }
  render() {
    const { height } = this.state;
    console.log(height);

    const myStyle = { color: 'blue', height: this.state.height + 'px', backgroundColor: 'green' };
    return (
      <div>
        <button onClick={e => { this.btnClicked() }}>动态修改样式</button>
        <HelloWorldComponent style={myStyle} />
      </div>
    )
  }

  btnClicked() {
    this.setState({
      height: this.state.height + 10
    });
  }
}
