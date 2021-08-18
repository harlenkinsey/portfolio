import React, { useEffect } from 'react';
import Background from '../images/background-image-2.png';
import M from 'materialize-css/dist/js/materialize.min.js';

const Parallax = () => {
    
    const cardWidth = window.innerWidth > 700 ? "300px" : "250px";
    const cardHeight = window.innerHeight > 700 ? "400px" : "425px";
    
    useEffect(() => {
        let element = document.querySelectorAll(".parallax");
        M.Parallax.init(element);
    }, []);

    return (
        <div className="parallax-container">
            <div className="parallax">
                <img src={Background}/>
            </div>
        </div>
    )
}

export default Parallax
