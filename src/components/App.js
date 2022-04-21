import React,  {Component} from 'react'

import LeftSide from './LeftSide.js'
import RightSide from './RightSide.js'

class App extends React.Component {
    render() {
        return (
        <div className="container">
            <LeftSide />
            <RightSide />

        </div>
        )
    }
}

export default App