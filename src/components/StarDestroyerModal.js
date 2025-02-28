import React, { useEffect, Fragment } from 'react';
import YoutubeEmbed from './YoutubeEmbed';
import M from 'materialize-css';

const StarDestroyerModal = () => {

    useEffect(() => {
        var elems = document.querySelectorAll('.modal');
        var instance = M.Modal.init(elems);
    }) 
    
    return (
        <Fragment>
            <a className='modal-trigger' href='#modal3'>Explore</a>
            <div id='modal3' className='modal left-align star-destroyer-modal'>
                <div className='modal-content'>
                    <h4>Game Footage</h4>  
                    <hr></hr>
                    <YoutubeEmbed embedId="4XNwXc0FbG8" />
                    <hr></hr>
                    <p>Download Link (Android only):</p>
                    <p><a href="">Star Destroyer.apk</a></p>
                </div>
                <div className='modal-footer'>
                    <a href='#!' className='modal-close waves-effect waves-green btn-flat'>Close</a>
                </div>
            </div>
        </Fragment>
    )

}

export default StarDestroyerModal