import React from 'react';
import Dropdown from './Dropdown';

const Header = () => {

    return (
        <div className='row border-bottom black' style={{position: 'sticky'}}>
            <div className='row valign-wrapper'>
                <div className='col s6 left-align'>
                    <div className='left-align valign-wrapper'>
                        <li className='header-text'>
                            <h3><span className='highlight'>Portfolio;</span></h3>
                        </li>
                        <li className='blog-button'>
                            <a href='https://blog.harlenkinsey.com' className='btn-floating btn-large waves-effect waves-light white'><i className='fas fa-rocket black'></i></a>
                        </li>
                    </div>
                </div>
                
                <div className='col s6 right-align'>
                    <div>
                        <li className='header-button-initial'>
                            <a href='https://www.linkedin.com/in/harlen-kinsey-9075291b1' target='_blank' rel="noopener noreferrer" className='btn-floating btn-large waves-effect waves-light white'><i className='fab fa-linkedin black'></i></a>
                        </li>
                        <li className='header-button-subsequent'>
                            <a href='https://github.com/harlenkinsey' target='_blank' rel="noopener noreferrer" className='btn-floating btn-large waves-effect waves-light white'><i className='fab fa-github black'></i></a>
                        </li>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Header