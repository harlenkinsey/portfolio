import React from 'react';

const SocialMediaButtons = () => {

    return (
        <ul className={window.innerWidth > 700 ? "social-container-desktop" : "social-container-mobile"}>
            <li className="social-icon-initial">
                <a className="btn-floating btn-large waves-effect waves-light black"><i className="fab fa-linkedin"></i></a>
            </li>
            <li className="social-icon-subsequent">
                <a className="btn-floating btn-large waves-effect waves-light black"><i className="fab fa-github"></i></a>
            </li>
        </ul>
    )
}

export default SocialMediaButtons
