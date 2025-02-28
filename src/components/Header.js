import React, { useEffect } from 'react';
import M from 'materialize-css';

const Header = () => {

    let width = window.innerWidth;

    useEffect(() => {
        var elems = document.querySelectorAll('.modal');
        var instance = M.Modal.init(elems);
    }) 

    return (


        <div className='row border-bottom black'>
            <div className='row valign-wrapper'>
                <div className='col s4 m6 left-align'>
                    <div className='left-align valign-wrapper'>
                        <li className='header-text'>
                            <h3><span className='highlight'>Portfolio;</span></h3>
                        </li>
                    </div>
                </div>
                <div className='col s8 m6 right-align'>
                    <div>
                        <li className='header-button-initial'>
                            <a href='https://www.linkedin.com/in/harlen-kinsey-9075291b1' target='_blank' rel="noopener noreferrer" className={'btn-floating waves-effect waves-light white' + `${width >= 768 ? ' btn-large' : ' btn'}`}><i className='fab fa-linkedin black'></i></a>
                        </li>
                        <li className='header-button-subsequent'>
                            <a href='https://github.com/harlenkinsey' target='_blank' rel="noopener noreferrer" className={'btn-floating waves-effect waves-light white' + `${width >= 768 ? ' btn-large' : ' btn'}`}><i className='fab fa-github black'></i></a>
                        </li>
                        <li className='header-button-subsequent'>
                            <a className={'about-me-background modal-trigger btn-floating waves-effect waves-light' + `${width >= 768 ? ' btn-large' : ' btn'}`}  href='#modal2'><i className='fas fa-question about-me-icon'></i></a>
                            <div id='modal2' className='modal left-align'>
                                <div className='modal-content'>
                                    <h4>About Me</h4>
                                    <p>Hi, I'm Harlen 👋 I'm a recent Accounting graduate with an interest in software development. Programming, automation, and data analysis are becoming increasingly important skills for accountants to have. Most of my experience has been with the MERN stack, Unity, and Godot. The languages I'm most familiar with are Python, C#, and JavaScript. If you ever feel the need to get in contact with me, you can shoot me an <a href='mailto:harlenkinsey60@gmail.com' className='blue-text'>email</a> or you can send me a message through <a href='https://www.linkedin.com/in/harlen-kinsey-9075291b1' className='blue-text'>LinkedIn</a>.</p>
                                </div>
                                <div className='modal-footer'>
                                    <a href='#!' className='modal-close waves-effect waves-green btn-flat'>Close</a>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Header