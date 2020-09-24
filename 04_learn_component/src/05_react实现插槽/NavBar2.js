import React, { Component } from 'react'
import './navBarStyle.css'
export default class NavBar extends Component {
  render() {
    const { leftSolt, centerSolt, rightSolt } = this.props;
    return (
      <div className="nav-bar">
        <div className="nav-bar-item left-item">{leftSolt}</div>
        <div className="nav-bar-item center-item">{centerSolt}</div>
        <div className="nav-bar-item right-item">{rightSolt}</div>
      </div>
    )
  }
}
