import React, { Component } from 'react'

class WorkHistoryItem extends Component {
render() {
return(
    <div>
    <h1>{this.props.company}</h1>
    <p>{this.props.position}<span>{this.props.dates}</span></p>

    <ul>
        <li>{this.props.responsibility1}</li>
        <li>{this.props.responsibility2}</li>
        <li>{this.props.responsibility3}</li>

    </ul>
    </div>
)

}
}

export default WorkHistoryItem