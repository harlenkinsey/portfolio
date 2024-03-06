import React from 'react';

const Footer = () => {
    
    const today = new Date();
    
    return (
        <div className='row black footer'>
            <div className='col s6 copyright'>
                <b><p className='white-text'>Harlen Kinsey <i className='fas fa-copyright'></i> {today.getFullYear()}</p></b>
            </div>
            <div className='col s6 right-align'>
                <p className='white-text'>background image: u/astrellon3</p>
            </div>
        </div>
    )
    
}

export default Footer