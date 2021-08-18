import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';


const CarouselItem = ({ title, description, tags, link }) => {

    const cardWidth = window.innerWidth > 700 ? "300px" : "250px";
    const cardHeight = window.innerHeight > 700 ? "400px" : "425px";

    const tagsList = tags.map((tag) => 
        <li style={{ display: "inline-block", margin: "5px 5px 0px 0px" }}>
            <a className="waves-effect waves-light btn">{tag}</a> 
        </li>
        );

    return (
        <div className="carousel-item" style={{ height: cardHeight, width: cardWidth }}>
            <div className="card white" style={{ height: cardHeight, width: cardWidth }}>
                <div className="card-content black-text">
                    <span className="card-title">{title}</span>
                    <p>{description}</p>
                    <h5>Tags</h5>
                    <ul style={{ margin:"15px 0px 15px 0px"}}>{tagsList}</ul>
                    <h5>Links</h5>
                    <a href={link} className="waves-effect waves-light blue btn-large">{title}{" "}<FontAwesomeIcon icon={faRocket}/></a>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem
