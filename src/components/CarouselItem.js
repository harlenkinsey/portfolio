import React from 'react';

const CarouselItem = ({ title, description, tags, link }) => {

    const tagsList = tags.map((tag) => 
        
        <li key={tag} className='tag'>
            
            <a className='waves-effect waves-light btn'>
                {tag}
            </a>

        </li>
        );

    return (
        <div className='carousel-item'>
            <div className='card white'>
                <div className='card-content black-text'>
                    <span className='card-title'>{title}</span>
                    <p>{description}</p>
                    <h5>Tags</h5>
                    <ul>{tagsList}</ul>
                    <h5>Links</h5>
                    <a href={link} target='_blank' className='waves-effect waves-light blue btn-large'>{title} {' '}<i className='fas fa-rocket'></i></a>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem