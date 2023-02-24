import React from 'react';

const ProjectCard = ({ title, description, link, gif, credit }) => {

    return (
        <div className='card black center'>
            <div className='card-image'>
                <div>
                    <a href={credit} target="_blank">
                        <img src={gif} height='200px' alt='' />
                    </a>
                    <span className='card-title'>{title}</span>
                </div>
            </div>
            <div className='card-content white-text'>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <a href={link} target="_blank">Explore</a>
            </div>
        </div>
    )
}

export default ProjectCard
