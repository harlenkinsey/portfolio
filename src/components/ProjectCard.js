import React, { useEffect } from 'react';
import StarDestroyerModal from './StarDestroyerModal';

const ProjectCard = ({ title, description, link, gif, credit, privacyPolicy }) => {

    let PP
    let margin = 0
    let target

    if(privacyPolicy){
        PP = privacyPolicy
        margin = 24
        target = ''
    } else {
        PP = ''
        target = "_blank"
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
                {privacyPolicy ? <StarDestroyerModal/> : <a href={link} target={target} style={{marginRight: margin}}>Explore</a>}
                {PP}
            </div>
        </div>
    )
}

export default ProjectCard
