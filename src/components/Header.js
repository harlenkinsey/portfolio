import React from 'react';

const Header = () => {
    return (
        <div className='row header-border black valign-wrapper'>
            <div className='col l6'>
                <div className='left-align valign-wrapper'>
                    <li className='header-text'>
                        <h3><span className='highlight'>Portfolio;</span></h3>
                    </li>
                    <li className='blog-button'>
                        <a href='#' className='btn-floating btn-large waves-effect waves-light white'><i className='fas fa-rocket black'></i></a>
                    </li>
                </div>
            </div>
            
            <div className='col l6'>
                <div className='right-align'>
                    <li className='header-button-initial'>
                        <a href='https://www.linkedin.com/in/harlen-kinsey-9075291b1' target='_blank' rel="noopener noreferrer" className='btn-floating btn-large waves-effect waves-light white'><i className='fab fa-linkedin black'></i></a>
                    </li>
                    <li className='header-button-subsequent'>
                        <a href='https://github.com/harlenkinsey' target='_blank' rel="noopener noreferrer" className='btn-floating btn-large waves-effect waves-light white'><i className='fab fa-github black'></i></a>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Header