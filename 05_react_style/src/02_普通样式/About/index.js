import React, { PureComponent } from 'react'
import './style.css'
export default class About extends PureComponent {
  render() {
    return (
      <div className="about">
        <h2 className="title">About</h2>
        <div className="setting">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </div>
    )
  }
}
