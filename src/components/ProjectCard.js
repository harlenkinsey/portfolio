import React from 'react';

const ProjectCard = ({ title, description, link }) => {

    return (
        <div className='card black center'>
            <div className='card-content white-text'>

                <div className='row project-card-header valign-wrapper'>
                    <div className='col s8'>
                        <span className='card-title'>{title}</span>
                    </div>
                    <div className='col s4' style={{ marginBottom: 10 }}>
                        <a href={link} className='btn-floating white btn-large'><i className='fas fa-rocket' style={{color: 'black'}}></i></a>
                    </div>
                </div>
                <p className='project-card-description'>{description}</p>
                
            </div>
        </div>
    )
}

export default ProjectCard
