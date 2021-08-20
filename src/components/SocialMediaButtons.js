import React from 'react';

const SocialMediaButtons = () => {

    return (
        <ul className='social-container'>
            <li className='social-icon-initial'>
                <a href='https://www.linkedin.com/in/harlen-kinsey-9075291b1' target='_blank' className='btn-floating btn-large waves-effect waves-light black'><i className='fab fa-linkedin'></i></a>
            </li>
            <li className='social-icon-subsequent'>
                <a href='https://github.com/harlenkinsey60' target='_blank' className='btn-floating btn-large waves-effect waves-light black'><i className='fab fa-github'></i></a>
            </li>
        </ul>
    )
}

export default SocialMediaButtons
