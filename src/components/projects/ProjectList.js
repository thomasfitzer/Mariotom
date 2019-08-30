import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            { projects && projects.map(project => {
                return (
                    <ProjectSummary project={project} key={project.id} />
                )
            })}
        </div>
    )
}

export default ProjectList;

// Line 7- This line is saying "if there are projects then do the map thing. The && is the key.