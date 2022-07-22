import React from 'react';

const Post = ({ title, date, update, sections, texts }) => {

    return (
        <div className='background'>
<<<<<<< Updated upstream
            <div className='post-container'>
                <div className='row section-wrapper'>
                    <h1>{title}</h1>
                    <div className='row border-top'>
                        <div className='col s6'>
                            <p>{date}</p>
                        </div>
                        <div className='col s6'>
                            <p>Updated: {update}</p>
                        </div>
                    </div>
                </div>
                <div className='row'>

                    <div className='col s12 l3 section-wrapper'>
                        {sections.map((section) => {

                                let link = '#' + section;

                                return (
                                    <div className='section-link-wrapper'>
                                        <a href={link}><p>{section}</p></a>
                                    </div>
                                )
                            })}
                    </div>

                    <div className='col s0 l1 white-text'>
                        
                    </div>

                    <div className='col l8 s12 section-wrapper' style={{padding: '0'}}>
                        {sections.map((section, index) => {
                            return (
                                <div>
                                    <div className='white-text' id={section}>
                                        <h1>{section}</h1>
=======
            <div className='post-container container'>

                <div className='row white-text center-align background-black'>
                    <div className='col s8'></div>
                    <h1>{title}</h1>
                    <p>{date}</p>
                    <p>{update}</p>
                </div>

                <div style={{padding:'20px 0px'}} className='row'>

                    <div className='white-text center-align col s8'>
                        {sections.map((section, index) => {
                            return (
                                <div>
                                    <div className='white-text background-black'>
                                        <h1 className='border-bottom'>{section}</h1>
>>>>>>> Stashed changes
                                        <p>{texts[index]}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
<<<<<<< Updated upstream
                    
=======

>>>>>>> Stashed changes
                </div>
            </div>
        </div>
    )
}

export default Post