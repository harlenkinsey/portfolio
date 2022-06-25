import React from 'react';

const Footer = () => {
    //used to correct footer height if body height doesn't cover screen
    let windowHeight = window.innerHeight;
    let bodyHeight = window.document.body.offsetHeight;
    let correction = windowHeight - bodyHeight;

    if(bodyHeight < windowHeight){
        return (
            <div className='row black footer' style={{height: correction}}>
                <div className='col s6 copyright'>
                    <b><p className='white-text'>Harlen Kinsey <i className='fas fa-copyright'></i> 2022</p></b>
                </div>
                <div className='col s6 right-align'>
                    <p className='white-text'>background image: u/astrellon3</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='row black footer'>
                <div className='col s6 copyright'>
                    <b><p className='white-text'>Harlen Kinsey <i className='fas fa-copyright'></i> 2022</p></b>
                </div>
                <div className='col s6 right-align'>
                    <p className='white-text'>background image: u/astrellon3</p>
                </div>
            </div>
        )
    }
    
}

export default Footer