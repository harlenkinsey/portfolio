import React, { useEffect } from 'react';
import Background from '../images/background-image.jpg';
import M from 'materialize-css/dist/js/materialize.min.js';

const Parallax = () => {
    
    useEffect(() => {
        let element = document.querySelectorAll(".parallax");
        M.Parallax.init(element);
    }, []);

    return (
        <div className="parallax-container">
            <div className="parallax">
                <img src={Background} width={100}/>
            </div>
        </div>
    )
}

export default Parallax
