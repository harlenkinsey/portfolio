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
            <div id='modal3' className='modal left-align'>
                <div className='modal-content'>
                    <h3>Game Footage</h3>
                    <hr></hr>
                    <YoutubeEmbed embedId="4XNwXc0FbG8" />
                    <hr></hr>
                    <h3>Download Link (Android only)</h3>
                    <h1><a href="">Link</a></h1>
                <div className='modal-footer'>
                    <a href='#!' className='modal-close waves-effect waves-green btn-flat'>Close</a>
                </div>
            </div>
            </div>
        </Fragment>
    )

}

export default StarDestroyerModal