import React, { Component } from 'react'
import NavBar from './NavBar2'
export default class App extends Component {
    render() {
        return (
            <div>
                {/* <NavBar>
                    <div>
                        left element
                    </div>
                    <div>
                        center elemenet
                    </div>
                    <div>
                        right element
                    </div>
                </NavBar> */}
                <NavBar
                    leftSolt={<div>left element</div>}
                    centerSolt={<div>center solt</div>}
                    rightSolt={<div>right solt</div>}
                />
            </div>
        )
    }
}
