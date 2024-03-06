import React from 'react';

const ProjectCard = ({ title, description, link, gif, credit, privacyPolicy }) => {

    let PP
    let margin = 0

    if(privacyPolicy){
        PP = privacyPolicy
        margin = 24
    } else {
        PP = ''
    }

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
            <div className='card-content center-content white-text'>
                {description}
            </div>
            <div className='card-action center-content'>
                <a href={link} target="_blank" style={{marginRight: margin}}>Explore</a>
                {PP}
            </div>
        </div>
    )
}

export default ProjectCard
