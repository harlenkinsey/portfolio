import React from 'react';

const ProjectCard = ({ title, description, link, gif, credit }) => {

    return (
        <div className='card black center'>
            <div className='card-image'>
                <div>
                    <a href={credit}>
                        <img src={gif} height='200px' />
                    </a>
                    <span className='card-title'>{title}</span>
                </div>
            </div>
            <div className='card-content white-text'>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <a href={link}>Explore</a>
            </div>
        </div>
    )
}

export default ProjectCard
