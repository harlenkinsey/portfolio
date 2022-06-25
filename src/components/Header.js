import React from 'react';
import Dropdown from './Dropdown';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    let width = window.innerWidth;
    let location = useLocation().pathname;

    return (
        <div className='row header-border black'>
            <div className='row valign-wrapper'>
                <div className='col l6 left-align'>
                    <div className='left-align valign-wrapper'>
                        <li className='header-text'>
                            <h3><span className='highlight'>Blog;</span></h3>
                        </li>
                        <li className='blog-button'>
                            { location == '/' ? <a href='https://www.harlenkinsey.com' className='btn-floating btn-large waves-effect waves-light white'><i className='fas fa-rocket black'></i></a> :
                            <Link to='/'><a href='#' className='btn-floating btn-large waves-effect waves-light white'><i className='fas fa-home black'></i></a></Link>}
                        </li>
                    </div>
                </div>
                
                <div className='col l6 right-align'>
                    { width >= 768 ?

                    <div>
                        <li className='header-button-initial'>
                            <a href='https://www.linkedin.com/in/harlen-kinsey-9075291b1' target='_blank' rel="noopener noreferrer" className='btn-floating btn-large waves-effect waves-light white'><i className='fab fa-linkedin black'></i></a>
                        </li>
                        <li className='header-button-subsequent'>
                            <a href='https://github.com/harlenkinsey' target='_blank' rel="noopener noreferrer" className='btn-floating btn-large waves-effect waves-light white'><i className='fab fa-github black'></i></a>
                        </li>
                    </div>

                    : <Dropdown />}
                </div>

            </div>
        </div>
    )
    
}

export default Header