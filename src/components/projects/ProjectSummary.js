import React from 'react'

const ProjectSummary = ({ project }) => {
    
    return (
        <div className="card z-depth-0 project-summary">
                    <div className="card-content text-darken">
                        <span className="card-title">{project.title}</span>
                        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                        <p className="grey-text">Today's Date</p>
                    </div>
                </div>
    )
}   

export default ProjectSummary;