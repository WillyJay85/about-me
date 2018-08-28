import React, { Component } from 'react'

class ProjectItem extends Component {
render() {
return(
    <div>
    <h1>{this.props.name}</h1>
    <p>{this.props.dates}</p>

    <p>{this.props.description}</p>
    
    </div>
)

}
}

export default ProjectItem