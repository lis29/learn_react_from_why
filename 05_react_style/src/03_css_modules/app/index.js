import React, { PureComponent } from 'react'
import Home from "../Home"
import About from '../About'
import AppStyle from './style.module.css'

export default class App extends PureComponent {
  render() {
    return (
      <div id='app'>
        App
        <h2 className={AppStyle.title}>我是App的title</h2>
        <Home />
        <About />
      </div>
    )
  }
}
