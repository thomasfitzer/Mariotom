import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            { projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id} key={project.id}>
                    <ProjectSummary project={project} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList;

// Line 7- This line is saying "if there are projects then do the map thing. The && is the key.