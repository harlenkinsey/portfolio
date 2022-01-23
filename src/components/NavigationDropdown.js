import React, { useEffect } from 'react';
import M from 'materialize-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavigationDropdown = () => {

    useEffect(() => {
        M.Dropdown.init();
      });

    return (
        <div>
            <a href='#' className='btn waves-effect waves-light black'>
               <FontAwesomeIcon icon={faBars} />
            </a>
        </div>
    )
}

export default NavigationDropdown