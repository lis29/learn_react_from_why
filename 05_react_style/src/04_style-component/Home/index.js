import React, { PureComponent } from 'react'
import HomeStyle from './style.module.css'

export default class Home extends PureComponent {
  render() {
    return (
      <div id={HomeStyle.home}>
        <h2 className={HomeStyle.title}>Home</h2>
        <div className={HomeStyle.banner}>
          <ul>
            <li>111</li>
            <li>222</li>
            <li>333</li>
            <li>444</li>
            <li>5555</li>
          </ul>
        </div>
      </div>
    )
  }
}
