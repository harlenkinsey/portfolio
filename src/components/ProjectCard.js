import React from 'react';

const ProjectCard = ({ title, description, link }) => {

    return (
        <div className='card black center'>
            <div className='card-content white-text'>

                <div className='row project-card-header valign-wrapper'>
                    <div className='col s8'>
                        <span className='card-title'>{title}</span>
                    </div>
                    <div className='col s4'>
                        <a href={link} className='btn-floating btn-large waves-effect waves-light white'><i className='fas fa-rocket black'></i></a>
                    </div>
                </div>
                <p className='project-card-description'>{description}</p>
                
            </div>
        </div>
    )
}

export default ProjectCard
