import React from 'react';
import NavigationDropdown from './NavigationDropdown';

const Header = () => {
    return (
        <div className='row'>
            <NavigationDropdown/>
            <div className='col s12'>
                <h3 className='center-align'><span className='highlight'>Blog;</span></h3>
            </div>
        </div>
    )
}

export default Header