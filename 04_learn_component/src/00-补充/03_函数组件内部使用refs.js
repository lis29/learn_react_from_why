import React, { Component, createRef, useRef } from 'react'


function MyFunCompoent() {
  const textInput = useRef(null);

  function handClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input type="text" ref={textInput} />
      <input type="button" value="按钮" onClick={handClick} />
    </div>
  )
}


export default class App extends Component {

  render() {
    return (
      <div>
        <MyFunCompoent />
      </div>
    )
  }
}
