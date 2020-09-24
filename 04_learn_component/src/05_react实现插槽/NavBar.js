import React, { Component } from 'react'
import './navBarStyle.css'
export default class NavBar extends Component {
  render() {
    console.log(this.props.children);
    return (
      <div className="nav-bar">
        <div className="nav-bar-item left-item"> {this.props.children[0]} </div>
        <div className="nav-bar-item center-item"> {this.props.children[1]} </div>
        <div className="nav-bar-item right-item"> {this.props.children[2]} </div>
      </div>
    )
  }
}
