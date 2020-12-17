import React, { PureComponent } from 'react'
import AboutStyle from './style.module.css'

export default class About extends PureComponent {
  render() {
    return (
      <div className={AboutStyle.about}>
        <h2 className={AboutStyle.title}>About</h2>
        <div className={AboutStyle.setting}>
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
