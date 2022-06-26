import React from 'react';

const Post = ({ title, date, update, sections, texts }) => {

    return (
        <div className='background'>
            <div className='post-container'>
                <div className='row white-text border-round center-align background-black'>
                    <h1>{title}</h1>
                </div>
                <div style={{padding:'20px 0px'}} className='row'>
                    <div className='col s4 white-text border-round background-black'>
                        <p>{date}</p>
                        <p>{update}</p>
                    </div>
                    <div className='white-text center-align col s8'>
                        {sections.map((section, index) => {
                            return (
                                <div>
                                    <div className='white-text border-round background-black'>
                                        <h1 className='border-bottom'>{section}</h1>
                                        <p>{texts[index]}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post