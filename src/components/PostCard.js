import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ title, description, link, date }) => {

    return (
        <div className='card black center'>
            <div className='card-content white-text'>

                <div className='row post-card-header valign-wrapper'>
                    <div className='col s8 left-align'>
                        <h4 className='card-title'>{title}</h4>
                        <p>{date}</p>
                    </div>
                    <div className='col s4 right-align'>
                    <Link to={link}><a href='#' className='btn-floating btn-large waves-effect waves-light white'><i className='fas fa-rocket black'></i></a></Link>
                    </div>
                </div>
                <p className='post-card-description center-align'>{description}</p>
                
            </div>
        </div>
    )
}

export default PostCard
