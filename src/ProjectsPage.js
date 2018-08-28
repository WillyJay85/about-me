import React, { Component } from 'react';
import NavSite from './NavSite'
import ProjectItem from './ProjectItem'
class ProjectsPage extends Component {

    render() {
        return (
            <div>

                <header>
                    <NavSite />
                    <h1>About Josh Brackett</h1>
                </header>

                <section>

                    <ProjectItem name="about-me" dates=" 2017-2018" />
                        <ProjectItem description="This is a short informative biography written by and about Josh Brackett" />
                </section>
              
                </div>
        )
    }
}
export default ProjectsPage