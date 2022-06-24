import React, { useEffect } from 'react';
import M from 'materialize-css';

const Dropdown = () => {

    useEffect(() => {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225, alignment: 'right'});
      }, []);

    return (
        <div className='dropdown-wrapper'>
            <a className='dropdown-trigger btn black' href='#' data-target='dropdown1'><i className='fas fa-bars'></i></a>

            <ul id='dropdown1' className='dropdown-content'>
                <li className='dropdown-button'>
                    <a href='https://www.linkedin.com/in/harlen-kinsey-9075291b1' target='_blank' rel="noopener noreferrer" className='btn-floating btn-large waves-effect waves-light white'><i className='fab fa-linkedin black'></i></a>
                </li>
                <li className="divider" ></li>
                <li className='dropdown-button'>
                    <a href='https://github.com/harlenkinsey' target='_blank' rel="noopener noreferrer" className='btn-floating btn-large waves-effect waves-light white'><i className='fab fa-github black'></i></a>
                </li>
                <li className="divider" ></li>
            </ul>
        </div>
    )
}

export default Dropdown